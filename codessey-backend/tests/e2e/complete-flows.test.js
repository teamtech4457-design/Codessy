const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ContactForm = require('../../src/model.js/contactform.model');
const Query = require('../../src/model.js/query.model');
const contactFormRouter = require('../../src/router.js/contactform.router');
const queryRouter = require('../../src/router.js/query.router');
const emailService = require('../../src/utils/emailService');
const TestDataFactory = require('../helpers/testData');

// Mock email service
jest.mock('../../src/utils/emailService');

// Create full test app
const createTestApp = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/contact', contactFormRouter);
  app.use('/api/queries', queryRouter);
  
  // Health check
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
  });
  
  return app;
};

describe('End-to-End Tests - Complete User Flows', () => {
  let app;

  beforeAll(() => {
    app = createTestApp();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    emailService.sendEmail = jest.fn().mockResolvedValue(true);
    emailService.sendContactFormEmail = jest.fn().mockResolvedValue(true);
    emailService.sendConfirmationEmail = jest.fn().mockResolvedValue(true);
  });

  describe('Health Check', () => {
    test('should respond to health check', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body.status).toBe('OK');
    });
  });

  describe('Complete Contact Form Flow', () => {
    
    test('should complete full contact form lifecycle', async () => {
      // 1. Create contact form
      const validData = TestDataFactory.validContactForm();
      const createResponse = await request(app)
        .post('/api/contact')
        .send(validData)
        .expect(201);

      expect(createResponse.body.success).toBe(true);
      const formId = createResponse.body.data._id;

      // 2. Get the created form
      const getResponse = await request(app)
        .get(`/api/contact/${formId}`)
        .expect(200);

      expect(getResponse.body.data.email).toBe(validData.email);

      // 3. Update the form
      const updateResponse = await request(app)
        .put(`/api/contact/${formId}`)
        .send({ name: 'Updated Name' })
        .expect(200);

      expect(updateResponse.body.data.name).toBe('Updated Name');

      // 4. Get all forms and verify it's in the list
      const getAllResponse = await request(app)
        .get('/api/contact')
        .expect(200);

      expect(getAllResponse.body.data.length).toBeGreaterThan(0);

      // 5. Delete the form
      await request(app)
        .delete(`/api/contact/${formId}`)
        .expect(200);

      // 6. Verify deletion
      await request(app)
        .get(`/api/contact/${formId}`)
        .expect(404);
    });

    test('should handle multiple form submissions', async () => {
      const formsData = TestDataFactory.multipleContactForms(5);

      // Create multiple forms
      for (const formData of formsData) {
        const response = await request(app)
          .post('/api/contact')
          .send(formData)
          .expect(201);

        expect(response.body.success).toBe(true);
      }

      // Get all forms
      const getAllResponse = await request(app)
        .get('/api/contact')
        .expect(200);

      expect(getAllResponse.body.data.length).toBe(5);
      expect(getAllResponse.body.pagination.totalItems).toBe(5);
    });

    test('should handle form submission with search', async () => {
      // Create forms with specific data
      const form1 = TestDataFactory.validContactForm();
      form1.name = 'Alice Johnson';
      form1.email = 'alice@example.com';

      const form2 = TestDataFactory.validContactForm();
      form2.name = 'Bob Smith';
      form2.email = 'bob@example.com';

      await request(app).post('/api/contact').send(form1).expect(201);
      await request(app).post('/api/contact').send(form2).expect(201);

      // Search for Alice
      const searchResponse = await request(app)
        .get('/api/contact?search=Alice')
        .expect(200);

      expect(searchResponse.body.data.length).toBeGreaterThan(0);
      expect(searchResponse.body.data.some(f => f.name.includes('Alice'))).toBe(true);
    });
  });

  describe('Complete Query Flow', () => {
    
    test('should complete full query lifecycle', async () => {
      // 1. Create query
      const validData = TestDataFactory.validQuery();
      const createResponse = await request(app)
        .post('/api/queries')
        .send(validData)
        .expect(201);

      expect(createResponse.body.success).toBe(true);
      expect(createResponse.body.data.status).toBe('pending');
      const queryId = createResponse.body.data._id;

      // 2. Get the created query
      const getResponse = await request(app)
        .get(`/api/queries/${queryId}`)
        .expect(200);

      expect(getResponse.body.data.email).toBe(validData.email);
      expect(getResponse.body.data.status).toBe('pending');

      // 3. Update query to in-progress
      const updateToInProgress = await request(app)
        .put(`/api/queries/${queryId}`)
        .send({ status: 'in-progress' })
        .expect(200);

      expect(updateToInProgress.body.data.status).toBe('in-progress');

      // 4. Update query with response and mark as resolved
      const resolveResponse = await request(app)
        .put(`/api/queries/${queryId}`)
        .send({ 
          status: 'resolved',
          response: 'Thank you for your query. Here is our response.'
        })
        .expect(200);

      expect(resolveResponse.body.data.status).toBe('resolved');
      expect(resolveResponse.body.data.response).toBeDefined();

      // 5. Get all queries and verify it's in the list
      const getAllResponse = await request(app)
        .get('/api/queries')
        .expect(200);

      expect(getAllResponse.body.data.length).toBeGreaterThan(0);

      // 6. Close the query
      await request(app)
        .put(`/api/queries/${queryId}`)
        .send({ status: 'closed' })
        .expect(200);

      // 7. Delete the query
      await request(app)
        .delete(`/api/queries/${queryId}`)
        .expect(200);

      // 8. Verify deletion
      await request(app)
        .get(`/api/queries/${queryId}`)
        .expect(404);
    });

    test('should handle multiple queries with different priorities', async () => {
      const priorities = ['low', 'medium', 'high', 'urgent'];

      // Create queries with different priorities
      for (const priority of priorities) {
        const queryData = TestDataFactory.queryWithPriority(priority);
        queryData.email = `${priority}@example.com`; // Make unique

        const response = await request(app)
          .post('/api/queries')
          .send(queryData)
          .expect(201);

        expect(response.body.data.priority).toBe(priority);
      }

      // Filter by urgent priority
      const urgentResponse = await request(app)
        .get('/api/queries?priority=urgent')
        .expect(200);

      expect(urgentResponse.body.data.every(q => q.priority === 'urgent')).toBe(true);

      // Get statistics
      const statsResponse = await request(app)
        .get('/api/queries/statistics')
        .expect(200);

      expect(statsResponse.body.data.total).toBe(4);
      expect(statsResponse.body.data.byPriority).toBeDefined();
    });

    test('should handle query status transitions', async () => {
      const queryData = TestDataFactory.validQuery();
      
      // Create query (pending)
      const createResponse = await request(app)
        .post('/api/queries')
        .send(queryData)
        .expect(201);

      const queryId = createResponse.body.data._id;
      expect(createResponse.body.data.status).toBe('pending');

      // Get pending queries
      const pendingResponse = await request(app)
        .get('/api/queries?status=pending')
        .expect(200);

      expect(pendingResponse.body.data.length).toBeGreaterThan(0);

      // Move to in-progress
      await request(app)
        .put(`/api/queries/${queryId}`)
        .send({ status: 'in-progress' })
        .expect(200);

      // Get in-progress queries
      const inProgressResponse = await request(app)
        .get('/api/queries?status=in-progress')
        .expect(200);

      expect(inProgressResponse.body.data.some(q => q._id === queryId)).toBe(true);

      // Resolve query
      await request(app)
        .put(`/api/queries/${queryId}`)
        .send({ 
          status: 'resolved',
          response: 'Query resolved successfully'
        })
        .expect(200);

      // Get resolved queries
      const resolvedResponse = await request(app)
        .get('/api/queries?status=resolved')
        .expect(200);

      expect(resolvedResponse.body.data.some(q => q._id === queryId)).toBe(true);
    });
  });

  describe('Mixed Operations Flow', () => {
    
    test('should handle both contact forms and queries together', async () => {
      // Create contact form
      const contactData = TestDataFactory.validContactForm();
      const contactResponse = await request(app)
        .post('/api/contact')
        .send(contactData)
        .expect(201);

      expect(contactResponse.body.success).toBe(true);

      // Create query
      const queryData = TestDataFactory.validQuery();
      const queryResponse = await request(app)
        .post('/api/queries')
        .send(queryData)
        .expect(201);

      expect(queryResponse.body.success).toBe(true);

      // Get all contact forms
      const allContactForms = await request(app)
        .get('/api/contact')
        .expect(200);

      expect(allContactForms.body.data.length).toBeGreaterThan(0);

      // Get all queries
      const allQueries = await request(app)
        .get('/api/queries')
        .expect(200);

      expect(allQueries.body.data.length).toBeGreaterThan(0);
    });

    test('should handle pagination across multiple resources', async () => {
      // Create 10 contact forms
      const contactForms = TestDataFactory.multipleContactForms(10);
      for (const form of contactForms) {
        await request(app).post('/api/contact').send(form).expect(201);
      }

      // Create 10 queries
      const queries = TestDataFactory.multipleQueries(10);
      for (const query of queries) {
        await request(app).post('/api/queries').send(query).expect(201);
      }

      // Get paginated contact forms
      const page1Contact = await request(app)
        .get('/api/contact?page=1&limit=5')
        .expect(200);

      expect(page1Contact.body.data.length).toBe(5);
      expect(page1Contact.body.pagination.totalPages).toBe(2);

      // Get paginated queries
      const page1Queries = await request(app)
        .get('/api/queries?page=1&limit=5')
        .expect(200);

      expect(page1Queries.body.data.length).toBe(5);
      expect(page1Queries.body.pagination.totalPages).toBe(2);
    });
  });

  describe('Error Handling Flow', () => {
    
    test('should handle validation errors gracefully', async () => {
      // Try to create contact form with invalid data
      const invalidContact = { name: 'Test' }; // Missing required fields
      
      const response = await request(app)
        .post('/api/contact')
        .send(invalidContact)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBeDefined();
    });

    test('should handle non-existent resource access', async () => {
      const fakeId = '507f1f77bcf86cd799439011';

      // Try to get non-existent contact form
      await request(app)
        .get(`/api/contact/${fakeId}`)
        .expect(404);

      // Try to get non-existent query
      await request(app)
        .get(`/api/queries/${fakeId}`)
        .expect(404);
    });

    test('should handle invalid ID formats', async () => {
      // Try with invalid ID
      await request(app)
        .get('/api/contact/invalid-id')
        .expect(400);

      await request(app)
        .get('/api/queries/invalid-id')
        .expect(400);
    });
  });
});
