const ContactFormController = require('../../src/controller.js/contactform.controller');
const ContactForm = require('../../src/model.js/contactform.model');
const emailService = require('../../src/utils/emailService');
const TestDataFactory = require('../helpers/testData');
const TestHelpers = require('../helpers/testHelpers');

// Mock email service
jest.mock('../../src/utils/emailService');

describe('ContactForm Controller Unit Tests', () => {
  let controller;

  beforeEach(() => {
    controller = new ContactFormController();
    jest.clearAllMocks();
  });

  describe('createContactForm', () => {
    
    test('should create contact form successfully with valid data', async () => {
      const validData = TestDataFactory.validContactForm();
      const req = TestHelpers.mockRequest(validData);
      const res = TestHelpers.mockResponse();

      emailService.sendContactFormEmail = jest.fn().mockResolvedValue(true);
      emailService.sendConfirmationEmail = jest.fn().mockResolvedValue(true);

      await controller.createContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          message: expect.any(String),
          data: expect.objectContaining({
            email: validData.email,
            name: validData.name
          })
        })
      );
    });

    test('should return 400 if required fields are missing', async () => {
      const invalidData = { name: 'Test' }; // Missing required fields
      const req = TestHelpers.mockRequest(invalidData);
      const res = TestHelpers.mockResponse();

      await controller.createContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'All fields are required'
        })
      );
    });

    test('should return 400 with validation error for invalid email', async () => {
      const invalidData = TestDataFactory.invalidContactForm('email');
      const req = TestHelpers.mockRequest(invalidData);
      const res = TestHelpers.mockResponse();

      await controller.createContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });

    test('should continue if email sending fails', async () => {
      const validData = TestDataFactory.validContactForm();
      const req = TestHelpers.mockRequest(validData);
      const res = TestHelpers.mockResponse();

      emailService.sendContactFormEmail = jest.fn().mockRejectedValue(new Error('Email failed'));

      await controller.createContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true
        })
      );
    });

    test('should handle duplicate submission error', async () => {
      const validData = TestDataFactory.validContactForm();
      
      // Create first submission
      const contactForm = new ContactForm(validData);
      await contactForm.save();

      // Mock to throw duplicate key error
      jest.spyOn(ContactForm.prototype, 'save').mockRejectedValueOnce({
        code: 11000,
        message: 'Duplicate key error'
      });

      const req = TestHelpers.mockRequest(validData);
      const res = TestHelpers.mockResponse();

      await controller.createContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: expect.stringContaining('already exists')
        })
      );
    });
  });

  describe('getAllContactForms', () => {
    
    test('should get all contact forms with default pagination', async () => {
      const formsData = TestDataFactory.multipleContactForms(3);
      await ContactForm.insertMany(formsData);

      const req = TestHelpers.mockRequest({}, {}, {});
      const res = TestHelpers.mockResponse();

      await controller.getAllContactForms(req, res);

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
      const formsData = TestDataFactory.multipleContactForms(15);
      await ContactForm.insertMany(formsData);

      const req = TestHelpers.mockRequest({}, {}, { page: 2, limit: 5 });
      const res = TestHelpers.mockResponse();

      await controller.getAllContactForms(req, res);

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

    test('should handle search query', async () => {
      const formsData = TestDataFactory.multipleContactForms(5);
      formsData[0].name = 'Special User';
      await ContactForm.insertMany(formsData);

      const req = TestHelpers.mockRequest({}, {}, { search: 'Special' });
      const res = TestHelpers.mockResponse();

      await controller.getAllContactForms(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      const jsonCall = res.json.mock.calls[0][0];
      expect(jsonCall.data.length).toBeGreaterThan(0);
    });

    test('should handle sort parameter', async () => {
      const formsData = TestDataFactory.multipleContactForms(3);
      await ContactForm.insertMany(formsData);

      const req = TestHelpers.mockRequest({}, {}, { sort: 'name' });
      const res = TestHelpers.mockResponse();

      await controller.getAllContactForms(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test('should return empty array when no forms exist', async () => {
      const req = TestHelpers.mockRequest({}, {}, {});
      const res = TestHelpers.mockResponse();

      await controller.getAllContactForms(req, res);

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

  describe('getContactFormById', () => {
    
    test('should get contact form by valid id', async () => {
      const validData = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(validData);
      const savedForm = await contactForm.save();

      const req = TestHelpers.mockRequest({}, { id: savedForm._id.toString() });
      const res = TestHelpers.mockResponse();

      await controller.getContactFormById(req, res);

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
      const fakeId = '507f1f77bcf86cd799439011'; // Valid ObjectId format
      const req = TestHelpers.mockRequest({}, { id: fakeId });
      const res = TestHelpers.mockResponse();

      await controller.getContactFormById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'Contact form not found'
        })
      );
    });

    test('should return 400 for invalid id format', async () => {
      const req = TestHelpers.mockRequest({}, { id: 'invalid-id' });
      const res = TestHelpers.mockResponse();

      await controller.getContactFormById(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'Invalid contact form ID'
        })
      );
    });
  });

  describe('updateContactForm', () => {
    
    test('should update contact form successfully', async () => {
      const validData = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(validData);
      const savedForm = await contactForm.save();

      const updateData = { name: 'Updated Name' };
      const req = TestHelpers.mockRequest(updateData, { id: savedForm._id.toString() });
      const res = TestHelpers.mockResponse();

      await controller.updateContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          data: expect.objectContaining({
            name: 'Updated Name'
          })
        })
      );
    });

    test('should return 404 when updating non-existent form', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const updateData = { name: 'Updated Name' };
      const req = TestHelpers.mockRequest(updateData, { id: fakeId });
      const res = TestHelpers.mockResponse();

      await controller.updateContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteContactForm', () => {
    
    test('should delete contact form successfully', async () => {
      const validData = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(validData);
      const savedForm = await contactForm.save();

      const req = TestHelpers.mockRequest({}, { id: savedForm._id.toString() });
      const res = TestHelpers.mockResponse();

      await controller.deleteContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          message: expect.stringContaining('deleted')
        })
      );

      // Verify deletion
      const deletedForm = await ContactForm.findById(savedForm._id);
      expect(deletedForm).toBeNull();
    });

    test('should return 404 when deleting non-existent form', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const req = TestHelpers.mockRequest({}, { id: fakeId });
      const res = TestHelpers.mockResponse();

      await controller.deleteContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    test('should return 400 for invalid id format', async () => {
      const req = TestHelpers.mockRequest({}, { id: 'invalid-id' });
      const res = TestHelpers.mockResponse();

      await controller.deleteContactForm(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });
  });
});
