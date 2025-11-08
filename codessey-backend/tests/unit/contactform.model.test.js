const mongoose = require('mongoose');
const ContactForm = require('../../src/model.js/contactform.model');
const TestDataFactory = require('../helpers/testData');

describe('ContactForm Model Unit Tests', () => {
  
  describe('Schema Validation', () => {
    
    test('should create a valid contact form', async () => {
      const validData = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(validData);
      const savedContactForm = await contactForm.save();
      
      expect(savedContactForm._id).toBeDefined();
      expect(savedContactForm.email).toBe(validData.email);
      expect(savedContactForm.name).toBe(validData.name);
      expect(savedContactForm.phone).toBe(validData.phone);
      expect(savedContactForm.companyName).toBe(validData.companyName);
      expect(savedContactForm.companyEmail).toBe(validData.companyEmail);
      expect(savedContactForm.projectTitle).toBe(validData.projectTitle);
      expect(savedContactForm.projectDescription).toBe(validData.projectDescription);
      expect(savedContactForm.createdAt).toBeDefined();
      expect(savedContactForm.updatedAt).toBeDefined();
    });

    test('should fail without required email', async () => {
      const invalidData = TestDataFactory.invalidContactForm('email');
      delete invalidData.email;
      const contactForm = new ContactForm(invalidData);
      
      let error;
      try {
        await contactForm.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.email).toBeDefined();
    });

    test('should fail without required name', async () => {
      const invalidData = TestDataFactory.invalidContactForm('name');
      delete invalidData.name;
      const contactForm = new ContactForm(invalidData);
      
      let error;
      try {
        await contactForm.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.name).toBeDefined();
    });

    test('should fail without required phone', async () => {
      const invalidData = TestDataFactory.invalidContactForm('phone');
      delete invalidData.phone;
      const contactForm = new ContactForm(invalidData);
      
      let error;
      try {
        await contactForm.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.phone).toBeDefined();
    });

    test('should fail without required companyName', async () => {
      const invalidData = TestDataFactory.invalidContactForm('companyName');
      delete invalidData.companyName;
      const contactForm = new ContactForm(invalidData);
      
      let error;
      try {
        await contactForm.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.companyName).toBeDefined();
    });

    test('should fail without required projectTitle', async () => {
      const invalidData = TestDataFactory.invalidContactForm('projectTitle');
      delete invalidData.projectTitle;
      const contactForm = new ContactForm(invalidData);
      
      let error;
      try {
        await contactForm.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.projectTitle).toBeDefined();
    });

    test('should fail with invalid email format', async () => {
      const invalidData = TestDataFactory.invalidContactForm('email');
      invalidData.email = 'invalid-email';
      const contactForm = new ContactForm(invalidData);
      
      let error;
      try {
        await contactForm.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.email).toBeDefined();
    });

    test('should fail with invalid phone format', async () => {
      const invalidData = TestDataFactory.invalidContactForm('phone');
      invalidData.phone = 'abc';
      const contactForm = new ContactForm(invalidData);
      
      let error;
      try {
        await contactForm.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.phone).toBeDefined();
    });

    test('should trim whitespace from string fields', async () => {
      const data = TestDataFactory.validContactForm();
      data.name = '  John Doe  ';
      data.email = '  test@example.com  ';
      
      const contactForm = new ContactForm(data);
      const savedContactForm = await contactForm.save();
      
      expect(savedContactForm.name).toBe('John Doe');
      expect(savedContactForm.email).toBe('test@example.com');
    });

    test('should convert email to lowercase', async () => {
      const data = TestDataFactory.validContactForm();
      data.email = 'TEST@EXAMPLE.COM';
      
      const contactForm = new ContactForm(data);
      const savedContactForm = await contactForm.save();
      
      expect(savedContactForm.email).toBe('test@example.com');
    });

    test('should enforce name minimum length', async () => {
      const data = TestDataFactory.validContactForm();
      data.name = 'A';
      
      const contactForm = new ContactForm(data);
      
      let error;
      try {
        await contactForm.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.name).toBeDefined();
    });

    test('should enforce name maximum length', async () => {
      const data = TestDataFactory.validContactForm();
      data.name = 'A'.repeat(101);
      
      const contactForm = new ContactForm(data);
      
      let error;
      try {
        await contactForm.save();
      } catch (err) {
        error = err;
      }
      
      expect(error).toBeDefined();
      expect(error.errors.name).toBeDefined();
    });
  });

  describe('Model Methods', () => {
    
    test('should convert to JSON properly', async () => {
      const data = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(data);
      const savedContactForm = await contactForm.save();
      
      const json = savedContactForm.toJSON();
      
      expect(json).toHaveProperty('_id');
      expect(json).toHaveProperty('email');
      expect(json).toHaveProperty('name');
      expect(json).toHaveProperty('createdAt');
    });

    test('should convert to Object properly', async () => {
      const data = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(data);
      const savedContactForm = await contactForm.save();
      
      const obj = savedContactForm.toObject();
      
      expect(obj).toHaveProperty('_id');
      expect(obj).toHaveProperty('email');
      expect(obj).toHaveProperty('name');
    });
  });

  describe('Database Operations', () => {
    
    test('should find contact form by id', async () => {
      const data = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(data);
      const savedContactForm = await contactForm.save();
      
      const foundContactForm = await ContactForm.findById(savedContactForm._id);
      
      expect(foundContactForm).toBeDefined();
      expect(foundContactForm.email).toBe(data.email);
    });

    test('should find contact form by email', async () => {
      const data = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(data);
      await contactForm.save();
      
      const foundContactForm = await ContactForm.findOne({ email: data.email });
      
      expect(foundContactForm).toBeDefined();
      expect(foundContactForm.email).toBe(data.email);
    });

    test('should update contact form', async () => {
      const data = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(data);
      const savedContactForm = await contactForm.save();
      
      savedContactForm.name = 'Updated Name';
      const updatedContactForm = await savedContactForm.save();
      
      expect(updatedContactForm.name).toBe('Updated Name');
    });

    test('should delete contact form', async () => {
      const data = TestDataFactory.validContactForm();
      const contactForm = new ContactForm(data);
      const savedContactForm = await contactForm.save();
      
      await ContactForm.findByIdAndDelete(savedContactForm._id);
      const foundContactForm = await ContactForm.findById(savedContactForm._id);
      
      expect(foundContactForm).toBeNull();
    });

    test('should create multiple contact forms', async () => {
      const formsData = TestDataFactory.multipleContactForms(3);
      const forms = await ContactForm.insertMany(formsData);
      
      expect(forms).toHaveLength(3);
      
      const count = await ContactForm.countDocuments();
      expect(count).toBe(3);
    });
  });
});
