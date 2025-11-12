const QueryController = require('../../src/controller.js/query.controller');
const Query = require('../../src/model.js/query.model');
const emailService = require('../../src/utils/emailService');
const TestDataFactory = require('../helpers/testData');
const TestHelpers = require('../helpers/testHelpers');

// Mock email service
jest.mock('../../src/utils/emailService');

describe('Query Controller Unit Tests', () => {
  let controller;

  beforeEach(() => {
    controller = new QueryController();
    jest.clearAllMocks();
  });

  describe('createQuery', () => {
    
    test('should create query successfully with valid data', async () => {
      const validData = TestDataFactory.validQuery();
      const req = TestHelpers.mockRequest(validData);
      const res = TestHelpers.mockResponse();

      emailService.sendEmail = jest.fn().mockResolvedValue(true);

      await controller.createQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          message: expect.any(String),
          data: expect.objectContaining({
            email: validData.email,
            name: validData.name,
            status: 'pending'
          })
        })
      );
    });

    test('should return 400 if required fields are missing', async () => {
      const invalidData = { name: 'Test' }; // Missing required fields
      const req = TestHelpers.mockRequest(invalidData);
      const res = TestHelpers.mockResponse();

      await controller.createQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'All required fields must be provided',
          missingFields: expect.any(Object)
        })
      );
    });

    test('should set default priority to medium if not provided', async () => {
      const validData = TestDataFactory.validQuery();
      delete validData.priority;
      
      const req = TestHelpers.mockRequest(validData);
      const res = TestHelpers.mockResponse();

      emailService.sendEmail = jest.fn().mockResolvedValue(true);

      await controller.createQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      const jsonCall = res.json.mock.calls[0][0];
      expect(jsonCall.data.priority).toBe('medium');
    });

    test('should set default category to general if not provided', async () => {
      const validData = TestDataFactory.validQuery();
      delete validData.category;
      
      const req = TestHelpers.mockRequest(validData);
      const res = TestHelpers.mockResponse();

      emailService.sendEmail = jest.fn().mockResolvedValue(true);

      await controller.createQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      const jsonCall = res.json.mock.calls[0][0];
      expect(jsonCall.data.category).toBe('general');
    });

    test('should continue if email sending fails', async () => {
      const validData = TestDataFactory.validQuery();
      const req = TestHelpers.mockRequest(validData);
      const res = TestHelpers.mockResponse();

      emailService.sendEmail = jest.fn().mockRejectedValue(new Error('Email failed'));

      await controller.createQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true
        })
      );
    });

    test('should handle validation error', async () => {
      const invalidData = TestDataFactory.invalidQuery('email');
      const req = TestHelpers.mockRequest(invalidData);
      const res = TestHelpers.mockResponse();

      await controller.createQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });

    test('should accept urgent priority', async () => {
      const validData = TestDataFactory.queryWithPriority('urgent');
      const req = TestHelpers.mockRequest(validData);
      const res = TestHelpers.mockResponse();

      emailService.sendEmail = jest.fn().mockResolvedValue(true);

      await controller.createQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      const jsonCall = res.json.mock.calls[0][0];
      expect(jsonCall.data.priority).toBe('urgent');
    });
  });

  describe('getAllQueries', () => {
    
    test('should get all queries with default pagination', async () => {
      const queriesData = TestDataFactory.multipleQueries(3);
      await Query.insertMany(queriesData);

      const req = TestHelpers.mockRequest({}, {}, {});
      const res = TestHelpers.mockResponse();

      await controller.getAllQueries(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          data: expect.any(Array),
          pagination: expect.objectContaining({
            currentPage: 1,
            totalItems: 3
          })
        })
      );
    });

    test('should handle pagination parameters', async () => {
      const queriesData = TestDataFactory.multipleQueries(15);
      await Query.insertMany(queriesData);

      const req = TestHelpers.mockRequest({}, {}, { page: 2, limit: 5 });
      const res = TestHelpers.mockResponse();

      await controller.getAllQueries(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          pagination: expect.objectContaining({
            currentPage: 2,
            totalPages: 3,
            totalItems: 15,
            itemsPerPage: 5
          })
        })
      );
    });

    test('should filter by status', async () => {
      const queriesData = TestDataFactory.multipleQueries(5);
      queriesData[0].status = 'resolved';
      await Query.insertMany(queriesData);

      const req = TestHelpers.mockRequest({}, {}, { status: 'resolved' });
      const res = TestHelpers.mockResponse();

      await controller.getAllQueries(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      const jsonCall = res.json.mock.calls[0][0];
      expect(jsonCall.data.every(q => q.status === 'resolved')).toBe(true);
    });

    test('should filter by priority', async () => {
      const queriesData = TestDataFactory.multipleQueries(5);
      queriesData[0].priority = 'urgent';
      queriesData[1].priority = 'urgent';
      await Query.insertMany(queriesData);

      const req = TestHelpers.mockRequest({}, {}, { priority: 'urgent' });
      const res = TestHelpers.mockResponse();

      await controller.getAllQueries(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      const jsonCall = res.json.mock.calls[0][0];
      expect(jsonCall.data.every(q => q.priority === 'urgent')).toBe(true);
    });

    test('should handle search query', async () => {
      const queriesData = TestDataFactory.multipleQueries(5);
      queriesData[0].name = 'Special User';
      await Query.insertMany(queriesData);

      const req = TestHelpers.mockRequest({}, {}, { search: 'Special' });
      const res = TestHelpers.mockResponse();

      await controller.getAllQueries(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test('should return empty array when no queries exist', async () => {
      const req = TestHelpers.mockRequest({}, {}, {});
      const res = TestHelpers.mockResponse();

      await controller.getAllQueries(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          data: [],
          pagination: expect.objectContaining({
            totalItems: 0
          })
        })
      );
    });
  });

  describe('getQueryById', () => {
    
    test('should get query by valid id', async () => {
      const validData = TestDataFactory.validQuery();
      const query = new Query(validData);
      const savedQuery = await query.save();

      const req = TestHelpers.mockRequest({}, { id: savedQuery._id.toString() });
      const res = TestHelpers.mockResponse();

      await controller.getQueryById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          data: expect.objectContaining({
            email: validData.email
          })
        })
      );
    });

    test('should return 404 for non-existent id', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const req = TestHelpers.mockRequest({}, { id: fakeId });
      const res = TestHelpers.mockResponse();

      await controller.getQueryById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'Query not found'
        })
      );
    });

    test('should return 400 for invalid id format', async () => {
      const req = TestHelpers.mockRequest({}, { id: 'invalid-id' });
      const res = TestHelpers.mockResponse();

      await controller.getQueryById(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });
  });

  describe('updateQuery', () => {
    
    test('should update query successfully', async () => {
      const validData = TestDataFactory.validQuery();
      const query = new Query(validData);
      const savedQuery = await query.save();

      const updateData = { status: 'in-progress' };
      const req = TestHelpers.mockRequest(updateData, { id: savedQuery._id.toString() });
      const res = TestHelpers.mockResponse();

      await controller.updateQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          data: expect.objectContaining({
            status: 'in-progress'
          })
        })
      );
    });

    test('should update query with response', async () => {
      const validData = TestDataFactory.validQuery();
      const query = new Query(validData);
      const savedQuery = await query.save();

      const updateData = { 
        status: 'resolved',
        response: 'This is our response to your query.'
      };
      const req = TestHelpers.mockRequest(updateData, { id: savedQuery._id.toString() });
      const res = TestHelpers.mockResponse();

      await controller.updateQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      const jsonCall = res.json.mock.calls[0][0];
      expect(jsonCall.data.status).toBe('resolved');
      expect(jsonCall.data.response).toBe(updateData.response);
    });

    test('should return 404 when updating non-existent query', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const updateData = { status: 'resolved' };
      const req = TestHelpers.mockRequest(updateData, { id: fakeId });
      const res = TestHelpers.mockResponse();

      await controller.updateQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteQuery', () => {
    
    test('should delete query successfully', async () => {
      const validData = TestDataFactory.validQuery();
      const query = new Query(validData);
      const savedQuery = await query.save();

      const req = TestHelpers.mockRequest({}, { id: savedQuery._id.toString() });
      const res = TestHelpers.mockResponse();

      await controller.deleteQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          message: expect.stringContaining('deleted')
        })
      );

      // Verify deletion
      const deletedQuery = await Query.findById(savedQuery._id);
      expect(deletedQuery).toBeNull();
    });

    test('should return 404 when deleting non-existent query', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const req = TestHelpers.mockRequest({}, { id: fakeId });
      const res = TestHelpers.mockResponse();

      await controller.deleteQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    test('should return 400 for invalid id format', async () => {
      const req = TestHelpers.mockRequest({}, { id: 'invalid-id' });
      const res = TestHelpers.mockResponse();

      await controller.deleteQuery(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });
  });

  describe('getQueryStatistics', () => {
    
    test('should get query statistics', async () => {
      const queriesData = TestDataFactory.multipleQueries(10);
      await Query.insertMany(queriesData);

      const req = TestHelpers.mockRequest({}, {}, {});
      const res = TestHelpers.mockResponse();

      await controller.getQueryStatistics(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          data: expect.objectContaining({
            total: expect.any(Number),
            byStatus: expect.any(Object),
            byPriority: expect.any(Object)
          })
        })
      );
    });
  });
});
