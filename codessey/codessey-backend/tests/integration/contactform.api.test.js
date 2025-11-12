const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const ContactForm = require('../../src/model.js/contactform.model');
const contactFormRouter = require('../../src/router.js/contactform.router');
const emailService = require('../../src/utils/emailService');
const TestDataFactory = require('../helpers/testData');

// Mock email service
jest.mock('../../src/utils/emailService');

// Create test app
const createTestApp = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/contact', contactFormRouter);
  return app;
};

describe('ContactForm API Integration Tests', () => {
  let app;

  beforeAll(() => {
    app = createTestApp();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    emailService.sendContactFormEmail = jest.fn().mockResolvedValue(true);
    emailService.sendConfirmationEmail = jest.fn().mockResolvedValue(true);
  });

  describe('POST /api/contact - Create Contact Form', () => {
    
    test('should create contact form with valid data', async () => {
      const validData = TestDataFactory.validContactForm();

      const response = await request(app)
        .post('/api/contact')
        .send(validData)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBeDefined();
      expect(response.body.data).toHaveProperty('_id');
      expect(response.body.data.email).toBe(validData.email);
      expect(response.body.data.name).toBe(validData.name);
    });

    test('should return 400 when required fields are missing', async () => {
      const invalidData = { name: 'Test User' };

      const response = await request(app)
        .post('/api/contact')
        .send(invalidData)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('required');
      expect(response.body.missingFields).toBeDefined();
    });

    test('should return 400 for invalid email format', async () => {
      const invalidData = TestDataFactory.invalidContactForm('email');

      const response = await request(app)
        .post('/api/contact')
        .send(invalidData)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    test('should return 400 for invalid phone format', async () => {
      const invalidData = TestDataFactory.invalidContactForm('phone');
      invalidData.phone = 'abc';

      const response = await request(app)
        .post('/api/contact')
        .send(invalidData)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    test('should handle very long descriptions', async () => {
      const validData = TestDataFactory.validContactForm();
      validData.projectDescription = 'A'.repeat(2000);

      const response = await request(app)
        .post('/api/contact')
        .send(validData)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(response.body.success).toBe(true);
    });

    test('should trim whitespace from fields', async () => {
      const validData = TestDataFactory.validContactForm();
      validData.name = '  John Doe  ';
      validData.email = '  test@example.com  ';

      const response = await request(app)
        .post('/api/contact')
        .send(validData)
        .expect(201);

      expect(response.body.data.name).toBe('John Doe');
      expect(response.body.data.email).toBe('test@example.com');
    });

    test('should convert email to lowercase', async () => {
      const validData = TestDataFactory.validContactForm();
      validData.email = 'TEST@EXAMPLE.COM';

      const response = await request(app)
        .post('/api/contact')
        .send(validData)
        .expect(201);

      expect(response.body.data.email).toBe('test@example.com');
    });
  });

  describe('GET /api/contact - Get All Contact Forms', () => {
    
    test('should get all contact forms', async () => {
      const formsData = TestDataFactory.multipleContactForms(3);
      await ContactForm.insertMany(formsData);

      const response = await request(app)
        .get('/api/contact')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(3);
      expect(response.body.pagination).toBeDefined();
      expect(response.body.pagination.totalItems).toBe(3);
    });

    test('should handle pagination', async () => {
      const formsData = TestDataFactory.multipleContactForms(15);
      await ContactForm.insertMany(formsData);

      const response = await request(app)
        .get('/api/contact?page=2&limit=5')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(5);
      expect(response.body.pagination.currentPage).toBe(2);
      expect(response.body.pagination.totalPages).toBe(3);
    });

    test('should handle search query', async () => {
      const formsData = TestDataFactory.multipleContactForms(5);
      formsData[0].name = 'Special User';
      await ContactForm.insertMany(formsData);

      const response = await request(app)
        .get('/api/contact?search=Special')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBeGreaterThan(0);
    });

    test('should handle sort parameter', async () => {
      const formsData = TestDataFactory.multipleContactForms(3);
      await ContactForm.insertMany(formsData);

      const response = await request(app)
        .get('/api/contact?sort=name')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(3);
    });

    test('should return empty array when no forms exist', async () => {
      const response = await request(app)
        .get('/api/contact')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(0);
      expect(response.body.pagination.totalItems).toBe(0);
    });
  });

  describe('GET /api/contact/:id - Get Contact Form by ID', () => {
    
    test('should get contact form by id', async () => {
      const validData = TestDataFactory.validContactForm();
      const contactForm = await ContactForm.create(validData);

      const response = await request(app)
        .get(`/api/contact/${contactForm._id}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data._id).toBe(contactForm._id.toString());
      expect(response.body.data.email).toBe(validData.email);
    });

    test('should return 404 for non-existent id', async () => {
      const fakeId = '507f1f77bcf86cd799439011';

      const response = await request(app)
        .get(`/api/contact/${fakeId}`)
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('not found');
    });

    test('should return 400 for invalid id format', async () => {
      const response = await request(app)
        .get('/api/contact/invalid-id')
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('PUT /api/contact/:id - Update Contact Form', () => {
    
    test('should update contact form', async () => {
      const validData = TestDataFactory.validContactForm();
      const contactForm = await ContactForm.create(validData);

      const updateData = { name: 'Updated Name' };

      const response = await request(app)
        .put(`/api/contact/${contactForm._id}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe('Updated Name');
    });

    test('should return 404 for non-existent id', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const updateData = { name: 'Updated Name' };

      const response = await request(app)
        .put(`/api/contact/${fakeId}`)
        .send(updateData)
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    test('should validate updated fields', async () => {
      const validData = TestDataFactory.validContactForm();
      const contactForm = await ContactForm.create(validData);

      const updateData = { email: 'invalid-email' };

      const response = await request(app)
        .put(`/api/contact/${contactForm._id}`)
        .send(updateData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('DELETE /api/contact/:id - Delete Contact Form', () => {
    
    test('should delete contact form', async () => {
      const validData = TestDataFactory.validContactForm();
      const contactForm = await ContactForm.create(validData);

      const response = await request(app)
        .delete(`/api/contact/${contactForm._id}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toContain('deleted');

      // Verify deletion
      const deletedForm = await ContactForm.findById(contactForm._id);
      expect(deletedForm).toBeNull();
    });

    test('should return 404 for non-existent id', async () => {
      const fakeId = '507f1f77bcf86cd799439011';

      const response = await request(app)
        .delete(`/api/contact/${fakeId}`)
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    test('should return 400 for invalid id format', async () => {
      const response = await request(app)
        .delete('/api/contact/invalid-id')
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });
});
