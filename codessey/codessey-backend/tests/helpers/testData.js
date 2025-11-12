/**
 * Test Data Factory
 * Provides reusable test data for all tests
 */

class TestDataFactory {
  /**
   * Generate valid contact form data
   */
  static validContactForm() {
    return {
      email: 'test@example.com',
      name: 'John Doe',
      phone: '+1234567890',
      companyName: 'Test Company',
      companyEmail: 'company@example.com',
      projectTitle: 'Test Project',
      projectDescription: 'This is a test project description with sufficient details.'
    };
  }

  /**
   * Generate invalid contact form data
   */
  static invalidContactForm(field) {
    const data = this.validContactForm();
    
    switch(field) {
      case 'email':
        data.email = 'invalid-email';
        break;
      case 'name':
        data.name = 'A'; // Too short
        break;
      case 'phone':
        data.phone = 'invalid';
        break;
      case 'missing':
        delete data.email;
        break;
      default:
        delete data[field];
    }
    
    return data;
  }

  /**
   * Generate valid query data
   */
  static validQuery() {
    return {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+9876543210',
      query: 'I have a question about your services and would like to know more details.',
      priority: 'medium',
      category: 'general'
    };
  }

  /**
   * Generate invalid query data
   */
  static invalidQuery(field) {
    const data = this.validQuery();
    
    switch(field) {
      case 'email':
        data.email = 'invalid-email';
        break;
      case 'name':
        data.name = 'A'; // Too short
        break;
      case 'phone':
        data.phone = 'invalid';
        break;
      case 'query':
        data.query = 'short'; // Too short
        break;
      case 'missing':
        delete data.email;
        break;
      default:
        delete data[field];
    }
    
    return data;
  }

  /**
   * Generate query with specific priority
   */
  static queryWithPriority(priority) {
    const data = this.validQuery();
    data.priority = priority;
    return data;
  }

  /**
   * Generate query with specific category
   */
  static queryWithCategory(category) {
    const data = this.validQuery();
    data.category = category;
    return data;
  }

  /**
   * Generate multiple contact forms
   */
  static multipleContactForms(count = 5) {
    const forms = [];
    for (let i = 0; i < count; i++) {
      forms.push({
        email: `test${i}@example.com`,
        name: `Test User ${i}`,
        phone: `+123456789${i}`,
        companyName: `Company ${i}`,
        companyEmail: `company${i}@example.com`,
        projectTitle: `Project ${i}`,
        projectDescription: `Project description ${i} with sufficient details to meet validation requirements.`
      });
    }
    return forms;
  }

  /**
   * Generate multiple queries
   */
  static multipleQueries(count = 5) {
    const queries = [];
    const priorities = ['low', 'medium', 'high', 'urgent'];
    const categories = ['general', 'technical', 'billing', 'support'];
    
    for (let i = 0; i < count; i++) {
      queries.push({
        name: `User ${i}`,
        email: `user${i}@example.com`,
        phone: `+987654321${i}`,
        query: `This is test query number ${i} with sufficient content to pass validation.`,
        priority: priorities[i % priorities.length],
        category: categories[i % categories.length]
      });
    }
    return queries;
  }
}

module.exports = TestDataFactory;
