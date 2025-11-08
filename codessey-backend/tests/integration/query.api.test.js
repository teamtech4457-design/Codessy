const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const Query = require('../../src/model.js/query.model');
const queryRouter = require('../../src/router.js/query.router');
const emailService = require('../../src/utils/emailService');
const TestDataFactory = require('../helpers/testData');

// Mock email service
jest.mock('../../src/utils/emailService');

// Create test app
const createTestApp = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/queries', queryRouter);
  return app;
};

describe('Query API Integration Tests', () => {
  let app;

  beforeAll(() => {
    app = createTestApp();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    emailService.sendEmail = jest.fn().mockResolvedValue(true);
  });

  describe('POST /api/queries - Create Query', () => {
    
    test('should create query with valid data', async () => {
      const validData = TestDataFactory.validQuery();

      const response = await request(app)
        .post('/api/queries')
        .send(validData)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBeDefined();
      expect(response.body.data).toHaveProperty('_id');
      expect(response.body.data.email).toBe(validData.email);
      expect(response.body.data.name).toBe(validData.name);
      expect(response.body.data.status).toBe('pending');
    });

    test('should return 400 when required fields are missing', async () => {
      const invalidData = { name: 'Test User' };

      const response = await request(app)
        .post('/api/queries')
        .send(invalidData)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('required');
      expect(response.body.missingFields).toBeDefined();
    });

    test('should set default priority to medium', async () => {
      const validData = TestDataFactory.validQuery();
      delete validData.priority;

      const response = await request(app)
        .post('/api/queries')
        .send(validData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.priority).toBe('medium');
    });

    test('should set default category to general', async () => {
      const validData = TestDataFactory.validQuery();
      delete validData.category;

      const response = await request(app)
        .post('/api/queries')
        .send(validData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.category).toBe('general');
    });

    test('should accept urgent priority', async () => {
      const validData = TestDataFactory.queryWithPriority('urgent');

      const response = await request(app)
        .post('/api/queries')
        .send(validData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.priority).toBe('urgent');
    });

    test('should accept technical category', async () => {
      const validData = TestDataFactory.queryWithCategory('technical');

      const response = await request(app)
        .post('/api/queries')
        .send(validData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.category).toBe('technical');
    });

    test('should return 400 for invalid email format', async () => {
      const invalidData = TestDataFactory.invalidQuery('email');

      const response = await request(app)
        .post('/api/queries')
        .send(invalidData)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    test('should return 400 for invalid phone format', async () => {
      const invalidData = TestDataFactory.invalidQuery('phone');
      invalidData.phone = 'abc';

      const response = await request(app)
        .post('/api/queries')
        .send(invalidData)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    test('should trim whitespace from fields', async () => {
      const validData = TestDataFactory.validQuery();
      validData.name = '  Jane Smith  ';
      validData.email = '  jane@example.com  ';

      const response = await request(app)
        .post('/api/queries')
        .send(validData)
        .expect(201);

      expect(response.body.data.name).toBe('Jane Smith');
      expect(response.body.data.email).toBe('jane@example.com');
    });

    test('should convert email to lowercase', async () => {
      const validData = TestDataFactory.validQuery();
      validData.email = 'JANE@EXAMPLE.COM';

      const response = await request(app)
        .post('/api/queries')
        .send(validData)
        .expect(201);

      expect(response.body.data.email).toBe('jane@example.com');
    });
  });

  describe('GET /api/queries - Get All Queries', () => {
    
    test('should get all queries', async () => {
      const queriesData = TestDataFactory.multipleQueries(3);
      await Query.insertMany(queriesData);

      const response = await request(app)
        .get('/api/queries')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(3);
      expect(response.body.pagination).toBeDefined();
      expect(response.body.pagination.totalItems).toBe(3);
    });

    test('should handle pagination', async () => {
      const queriesData = TestDataFactory.multipleQueries(15);
      await Query.insertMany(queriesData);

      const response = await request(app)
        .get('/api/queries?page=2&limit=5')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(5);
      expect(response.body.pagination.currentPage).toBe(2);
      expect(response.body.pagination.totalPages).toBe(3);
    });

    test('should filter by status', async () => {
      const queriesData = TestDataFactory.multipleQueries(5);
      queriesData[0].status = 'resolved';
      await Query.insertMany(queriesData);

      const response = await request(app)
        .get('/api/queries?status=resolved')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.every(q => q.status === 'resolved')).toBe(true);
    });

    test('should filter by priority', async () => {
      const queriesData = TestDataFactory.multipleQueries(5);
      queriesData[0].priority = 'urgent';
      queriesData[1].priority = 'urgent';
      await Query.insertMany(queriesData);

      const response = await request(app)
        .get('/api/queries?priority=urgent')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.every(q => q.priority === 'urgent')).toBe(true);
    });

    test('should filter by category', async () => {
      const queriesData = TestDataFactory.multipleQueries(5);
      queriesData[0].category = 'billing';
      await Query.insertMany(queriesData);

      const response = await request(app)
        .get('/api/queries?category=billing')
        .expect(200);

      expect(response.body.success).toBe(true);
    });

    test('should handle search query', async () => {
      const queriesData = TestDataFactory.multipleQueries(5);
      queriesData[0].name = 'Special User';
      await Query.insertMany(queriesData);

      const response = await request(app)
        .get('/api/queries?search=Special')
        .expect(200);

      expect(response.body.success).toBe(true);
    });

    test('should handle sort parameter', async () => {
      const queriesData = TestDataFactory.multipleQueries(3);
      await Query.insertMany(queriesData);

      const response = await request(app)
        .get('/api/queries?sort=name')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(3);
    });

    test('should return empty array when no queries exist', async () => {
      const response = await request(app)
        .get('/api/queries')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(0);
      expect(response.body.pagination.totalItems).toBe(0);
    });
  });

  describe('GET /api/queries/:id - Get Query by ID', () => {
    
    test('should get query by id', async () => {
      const validData = TestDataFactory.validQuery();
      const query = await Query.create(validData);

      const response = await request(app)
        .get(`/api/queries/${query._id}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data._id).toBe(query._id.toString());
      expect(response.body.data.email).toBe(validData.email);
    });

    test('should return 404 for non-existent id', async () => {
      const fakeId = '507f1f77bcf86cd799439011';

      const response = await request(app)
        .get(`/api/queries/${fakeId}`)
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('not found');
    });

    test('should return 400 for invalid id format', async () => {
      const response = await request(app)
        .get('/api/queries/invalid-id')
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('PUT /api/queries/:id - Update Query', () => {
    
    test('should update query status', async () => {
      const validData = TestDataFactory.validQuery();
      const query = await Query.create(validData);

      const updateData = { status: 'in-progress' };

      const response = await request(app)
        .put(`/api/queries/${query._id}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.status).toBe('in-progress');
    });

    test('should update query with response', async () => {
      const validData = TestDataFactory.validQuery();
      const query = await Query.create(validData);

      const updateData = { 
        status: 'resolved',
        response: 'This is our response.'
      };

      const response = await request(app)
        .put(`/api/queries/${query._id}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.status).toBe('resolved');
      expect(response.body.data.response).toBe(updateData.response);
    });

    test('should return 404 for non-existent id', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const updateData = { status: 'resolved' };

      const response = await request(app)
        .put(`/api/queries/${fakeId}`)
        .send(updateData)
        .expect(404);

      expect(response.body.success).toBe(false);
    });
  });

  describe('DELETE /api/queries/:id - Delete Query', () => {
    
    test('should delete query', async () => {
      const validData = TestDataFactory.validQuery();
      const query = await Query.create(validData);

      const response = await request(app)
        .delete(`/api/queries/${query._id}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toContain('deleted');

      // Verify deletion
      const deletedQuery = await Query.findById(query._id);
      expect(deletedQuery).toBeNull();
    });

    test('should return 404 for non-existent id', async () => {
      const fakeId = '507f1f77bcf86cd799439011';

      const response = await request(app)
        .delete(`/api/queries/${fakeId}`)
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    test('should return 400 for invalid id format', async () => {
      const response = await request(app)
        .delete('/api/queries/invalid-id')
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/queries/statistics - Get Query Statistics', () => {
    
    test('should get query statistics', async () => {
      const queriesData = TestDataFactory.multipleQueries(10);
      await Query.insertMany(queriesData);

      const response = await request(app)
        .get('/api/queries/statistics')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('total');
      expect(response.body.data).toHaveProperty('byStatus');
      expect(response.body.data).toHaveProperty('byPriority');
    });

    test('should return zero statistics when no queries exist', async () => {
      const response = await request(app)
        .get('/api/queries/statistics')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.total).toBe(0);
    });
  });
});
