/**
 * Test Helper Utilities
 * Common helper functions for testing
 */

class TestHelpers {
  /**
   * Create mock request object
   */
  static mockRequest(body = {}, params = {}, query = {}) {
    return {
      body,
      params,
      query,
      headers: {},
      get: jest.fn()
    };
  }

  /**
   * Create mock response object
   */
  static mockResponse() {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
      sendStatus: jest.fn().mockReturnThis(),
      header: jest.fn().mockReturnThis(),
      set: jest.fn().mockReturnThis()
    };
    return res;
  }

  /**
   * Create mock next function
   */
  static mockNext() {
    return jest.fn();
  }

  /**
   * Wait for a specified time
   */
  static async wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Check if response matches expected structure
   */
  static expectSuccessResponse(response, statusCode = 200) {
    expect(response.status).toBe(statusCode);
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('message');
  }

  /**
   * Check if response is an error
   */
  static expectErrorResponse(response, statusCode = 400) {
    expect(response.status).toBe(statusCode);
    expect(response.body).toHaveProperty('success', false);
    expect(response.body).toHaveProperty('message');
  }

  /**
   * Verify email format
   */
  static isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  /**
   * Verify phone format
   */
  static isValidPhone(phone) {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
  }

  /**
   * Generate random string
   */
  static randomString(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Generate random email
   */
  static randomEmail() {
    return `${this.randomString(8)}@example.com`;
  }

  /**
   * Generate random phone
   */
  static randomPhone() {
    return `+${Math.floor(Math.random() * 9000000000) + 1000000000}`;
  }

  /**
   * Mock email service
   */
  static mockEmailService() {
    return {
      sendEmail: jest.fn().mockResolvedValue(true),
      sendContactFormEmail: jest.fn().mockResolvedValue(true),
      sendConfirmationEmail: jest.fn().mockResolvedValue(true)
    };
  }

  /**
   * Extract validation errors
   */
  static extractValidationErrors(response) {
    if (response.body.errors) {
      return response.body.errors.map(err => err.field);
    }
    return [];
  }
}

module.exports = TestHelpers;
