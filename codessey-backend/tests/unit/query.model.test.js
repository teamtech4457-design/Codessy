const mongoose = require('mongoose');
const Query = require('../../src/model.js/query.model');
const TestDataFactory = require('../helpers/testData');

describe('Query Model Unit Tests', () => {
  
  describe('Schema Validation', () => {
    
    test('should create a valid query', async () => {
      const validData = TestDataFactory.validQuery();
      const query = new Query(validData);
      const savedQuery = await query.save();
      
      expect(savedQuery._id).toBeDefined();
      expect(savedQuery.name).toBe(validData.name);
      expect(savedQuery.email).toBe(validData.email);
      expect(savedQuery.phone).toBe(validData.phone);
      expect(savedQuery.query).toBe(validData.query);
      expect(savedQuery.priority).toBe(validData.priority);
      expect(savedQuery.category).toBe(validData.category);
      expect(savedQuery.status).toBe('pending'); // Default status
      expect(savedQuery.createdAt).toBeDefined();
      expect(savedQuery.updatedAt).toBeDefined();
    });

    test('should fail without required name', async () => {
      const invalidData = TestDataFactory.invalidQuery('name');
      delete invalidData.name;
      const query = new Query(invalidData);
      
      let error;
      try {
        await query.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.name).toBeDefined();
    });

    test('should fail without required email', async () => {
      const invalidData = TestDataFactory.invalidQuery('email');
      delete invalidData.email;
      const query = new Query(invalidData);
      
      let error;
      try {
        await query.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.email).toBeDefined();
    });

    test('should fail without required phone', async () => {
      const invalidData = TestDataFactory.invalidQuery('phone');
      delete invalidData.phone;
      const query = new Query(invalidData);
      
      let error;
      try {
        await query.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.phone).toBeDefined();
    });

    test('should fail without required query', async () => {
      const invalidData = TestDataFactory.invalidQuery('query');
      delete invalidData.query;
      const queryDoc = new Query(invalidData);
      
      let error;
      try {
        await queryDoc.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.query).toBeDefined();
    });

    test('should fail with invalid email format', async () => {
      const invalidData = TestDataFactory.invalidQuery('email');
      invalidData.email = 'invalid-email';
      const query = new Query(invalidData);
      
      let error;
      try {
        await query.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.email).toBeDefined();
    });

    test('should fail with invalid phone format', async () => {
      const invalidData = TestDataFactory.invalidQuery('phone');
      invalidData.phone = 'abc';
      const query = new Query(invalidData);
      
      let error;
      try {
        await query.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.phone).toBeDefined();
    });

    test('should set default status as pending', async () => {
      const data = TestDataFactory.validQuery();
      delete data.status;
      
      const query = new Query(data);
      const savedQuery = await query.save();
      
      expect(savedQuery.status).toBe('pending');
    });

    test('should set default priority as medium', async () => {
      const data = TestDataFactory.validQuery();
      delete data.priority;
      
      const query = new Query(data);
      const savedQuery = await query.save();
      
      expect(savedQuery.priority).toBe('medium');
    });

    test('should set default category as general', async () => {
      const data = TestDataFactory.validQuery();
      delete data.category;
      
      const query = new Query(data);
      const savedQuery = await query.save();
      
      expect(savedQuery.category).toBe('general');
    });

    test('should accept valid status values', async () => {
      const statuses = ['pending', 'in-progress', 'resolved', 'closed'];
      
      for (const status of statuses) {
        const data = TestDataFactory.validQuery();
        data.email = `test-${status}@example.com`; // Make unique
        const query = new Query({ ...data, status });
        const savedQuery = await query.save();
        
        expect(savedQuery.status).toBe(status);
      }
    });

    test('should accept valid priority values', async () => {
      const priorities = ['low', 'medium', 'high', 'urgent'];
      
      for (const priority of priorities) {
        const data = TestDataFactory.validQuery();
        data.email = `test-${priority}@example.com`; // Make unique
        const query = new Query({ ...data, priority });
        const savedQuery = await query.save();
        
        expect(savedQuery.priority).toBe(priority);
      }
    });

    test('should trim whitespace from string fields', async () => {
      const data = TestDataFactory.validQuery();
      data.name = '  Jane Smith  ';
      data.email = '  jane@example.com  ';
      
      const query = new Query(data);
      const savedQuery = await query.save();
      
      expect(savedQuery.name).toBe('Jane Smith');
      expect(savedQuery.email).toBe('jane@example.com');
    });

    test('should convert email to lowercase', async () => {
      const data = TestDataFactory.validQuery();
      data.email = 'JANE@EXAMPLE.COM';
      
      const query = new Query(data);
      const savedQuery = await query.save();
      
      expect(savedQuery.email).toBe('jane@example.com');
    });

    test('should enforce name minimum length', async () => {
      const data = TestDataFactory.validQuery();
      data.name = 'A';
      
      const query = new Query(data);
      
      let error;
      try {
        await query.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.name).toBeDefined();
    });

    test('should enforce name maximum length', async () => {
      const data = TestDataFactory.validQuery();
      data.name = 'A'.repeat(101);
      
      const query = new Query(data);
      
      let error;
      try {
        await query.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.name).toBeDefined();
    });

    test('should enforce query minimum length', async () => {
      const data = TestDataFactory.validQuery();
      data.query = 'short';
      
      const queryDoc = new Query(data);
      
      let error;
      try {
        await queryDoc.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.query).toBeDefined();
    });
  });

  describe('Model Methods', () => {
    
    test('should convert to JSON properly', async () => {
      const data = TestDataFactory.validQuery();
      const query = new Query(data);
      const savedQuery = await query.save();
      
      const json = savedQuery.toJSON();
      
      expect(json).toHaveProperty('_id');
      expect(json).toHaveProperty('email');
      expect(json).toHaveProperty('name');
      expect(json).toHaveProperty('status');
      expect(json).toHaveProperty('createdAt');
    });

    test('should convert to Object properly', async () => {
      const data = TestDataFactory.validQuery();
      const query = new Query(data);
      const savedQuery = await query.save();
      
      const obj = savedQuery.toObject();
      
      expect(obj).toHaveProperty('_id');
      expect(obj).toHaveProperty('email');
      expect(obj).toHaveProperty('name');
    });
  });

  describe('Database Operations', () => {
    
    test('should find query by id', async () => {
      const data = TestDataFactory.validQuery();
      const query = new Query(data);
      const savedQuery = await query.save();
      
      const foundQuery = await Query.findById(savedQuery._id);
      
      expect(foundQuery).toBeDefined();
      expect(foundQuery.email).toBe(data.email);
    });

    test('should find query by email', async () => {
      const data = TestDataFactory.validQuery();
      const query = new Query(data);
      await query.save();
      
      const foundQuery = await Query.findOne({ email: data.email });
      
      expect(foundQuery).toBeDefined();
      expect(foundQuery.email).toBe(data.email);
    });

    test('should find queries by status', async () => {
      const queries = TestDataFactory.multipleQueries(3);
      await Query.insertMany(queries);
      
      const pendingQueries = await Query.find({ status: 'pending' });
      
      expect(pendingQueries.length).toBeGreaterThan(0);
    });

    test('should find queries by priority', async () => {
      const data = TestDataFactory.queryWithPriority('urgent');
      await new Query(data).save();
      
      const urgentQueries = await Query.find({ priority: 'urgent' });
      
      expect(urgentQueries.length).toBeGreaterThan(0);
      expect(urgentQueries[0].priority).toBe('urgent');
    });

    test('should update query status', async () => {
      const data = TestDataFactory.validQuery();
      const query = new Query(data);
      const savedQuery = await query.save();
      
      savedQuery.status = 'resolved';
      savedQuery.resolvedAt = new Date();
      const updatedQuery = await savedQuery.save();
      
      expect(updatedQuery.status).toBe('resolved');
      expect(updatedQuery.resolvedAt).toBeDefined();
    });

    test('should delete query', async () => {
      const data = TestDataFactory.validQuery();
      const query = new Query(data);
      const savedQuery = await query.save();
      
      await Query.findByIdAndDelete(savedQuery._id);
      const foundQuery = await Query.findById(savedQuery._id);
      
      expect(foundQuery).toBeNull();
    });

    test('should create multiple queries', async () => {
      const queriesData = TestDataFactory.multipleQueries(5);
      const queries = await Query.insertMany(queriesData);
      
      expect(queries).toHaveLength(5);
      
      const count = await Query.countDocuments();
      expect(count).toBe(5);
    });

    test('should sort queries by createdAt', async () => {
      const queriesData = TestDataFactory.multipleQueries(3);
      await Query.insertMany(queriesData);
      
      const sortedQueries = await Query.find().sort({ createdAt: -1 });
      
      expect(sortedQueries.length).toBe(3);
      expect(sortedQueries[0].createdAt >= sortedQueries[1].createdAt).toBe(true);
    });
  });
});
