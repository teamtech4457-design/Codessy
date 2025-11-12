# Testing Documentation - Codessey Backend

Comprehensive testing suite for the Codessey Contact Form and Query Management API.

## Table of Contents

1. [Overview](#overview)
2. [Testing Structure](#testing-structure)
3. [Installation](#installation)
4. [Running Tests](#running-tests)
5. [Test Coverage](#test-coverage)
6. [Writing Tests](#writing-tests)
7. [Continuous Integration](#continuous-integration)
8. [Troubleshooting](#troubleshooting)

## Overview

This project includes a complete testing suite covering:

- **Unit Tests**: Testing individual components (models, controllers)
- **Integration Tests**: Testing API endpoints with database
- **E2E Tests**: Testing complete user workflows
- **Manual Tests**: Documentation for manual API testing

### Testing Stack

- **Jest**: Test framework and runner
- **Supertest**: HTTP assertion library for API testing
- **MongoDB Memory Server**: In-memory MongoDB for isolated testing
- **Test Coverage**: Code coverage reporting

## Testing Structure

```
tests/
├── unit/                          # Unit tests
│   ├── contactform.model.test.js    # Contact form model tests
│   ├── contactform.controller.test.js # Contact form controller tests
│   ├── query.model.test.js          # Query model tests
│   └── query.controller.test.js     # Query controller tests
├── integration/                   # Integration tests
│   ├── contactform.api.test.js      # Contact form API tests
│   └── query.api.test.js            # Query API tests
├── e2e/                          # End-to-end tests
│   └── complete-flows.test.js       # Complete user flow tests
├── manual/                        # Manual testing documentation
│   ├── MANUAL_TESTING_GUIDE.md      # Manual testing guide
│   └── POSTMAN_COLLECTION.md        # Postman collection
└── helpers/                       # Test utilities
    ├── setup.js                      # Jest setup and database config
    ├── testData.js                   # Test data factory
    └── testHelpers.js                # Helper functions
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for manual testing)

### Install Testing Dependencies

```bash
npm install
```

This will install:
- jest
- supertest
- mongodb-memory-server
- @types/jest
- @types/supertest
- cross-env

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Run Specific Test Suites

```bash
# Unit tests only
npm test -- tests/unit

# Integration tests only
npm test -- tests/integration

# E2E tests only
npm test -- tests/e2e

# Specific test file
npm test -- tests/unit/contactform.model.test.js
```

### Run Tests in Watch Mode

```bash
npm test -- --watch
```

### Run Tests with Verbose Output

```bash
npm test -- --verbose
```

## Test Scripts in package.json

Update your `package.json` with these scripts:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "test:unit": "jest tests/unit",
    "test:integration": "jest tests/integration",
    "test:e2e": "jest tests/e2e",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:verbose": "jest --verbose"
  }
}
```

## Test Coverage

### Coverage Reports

After running tests with coverage, reports are generated in:

- `coverage/` directory
- `coverage/lcov-report/index.html` - HTML report (open in browser)
- `coverage/lcov.info` - LCOV format
- `coverage/coverage-final.json` - JSON format

### Coverage Thresholds

Current thresholds (configured in `jest.config.js`):

- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

### Viewing Coverage Report

```bash
# Run tests with coverage
npm run test:coverage

# Open HTML report (Windows)
start coverage/lcov-report/index.html

# Open HTML report (macOS)
open coverage/lcov-report/index.html

# Open HTML report (Linux)
xdg-open coverage/lcov-report/index.html
```

## Test Organization

### Unit Tests

**Purpose**: Test individual components in isolation

**Contact Form Model Tests**:
- Schema validation
- Field requirements
- Data type validation
- Default values
- String trimming and transformations
- Database operations (CRUD)

**Query Model Tests**:
- Schema validation
- Status and priority enums
- Category validation
- Field constraints
- Database queries and filters

**Controller Tests**:
- Request/response handling
- Input validation
- Error handling
- Business logic
- Mock dependencies

### Integration Tests

**Purpose**: Test API endpoints with real database operations

**Features Tested**:
- HTTP request/response cycles
- Route handlers
- Middleware processing
- Database interactions
- Pagination
- Filtering and searching
- Sorting

### E2E Tests

**Purpose**: Test complete user workflows

**Scenarios**:
- Complete contact form lifecycle (create → read → update → delete)
- Complete query lifecycle with status transitions
- Multiple resource interactions
- Complex filtering and searching
- Error handling across workflows

## Writing Tests

### Test File Naming Convention

- Unit tests: `*.test.js`
- Integration tests: `*.api.test.js`
- E2E tests: `*.test.js` (in e2e directory)

### Test Structure

```javascript
describe('Feature/Component Name', () => {
  
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });

  describe('Specific Functionality', () => {
    
    test('should do something specific', async () => {
      // Arrange
      const testData = TestDataFactory.validData();
      
      // Act
      const result = await someFunction(testData);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.property).toBe(expectedValue);
    });
  });
});
```

### Using Test Helpers

```javascript
const TestDataFactory = require('../helpers/testData');
const TestHelpers = require('../helpers/testHelpers');

// Generate test data
const validContactForm = TestDataFactory.validContactForm();
const validQuery = TestDataFactory.validQuery();
const multipleQueries = TestDataFactory.multipleQueries(10);

// Mock request/response
const req = TestHelpers.mockRequest(body, params, query);
const res = TestHelpers.mockResponse();

// Verify responses
TestHelpers.expectSuccessResponse(response, 201);
TestHelpers.expectErrorResponse(response, 400);
```

## Manual Testing

### Documentation

1. **Manual Testing Guide**: `tests/manual/MANUAL_TESTING_GUIDE.md`
   - cURL examples
   - Postman instructions
   - Browser console testing
   - Complete test cases

2. **Postman Collection**: `tests/manual/POSTMAN_COLLECTION.md`
   - Import instructions
   - Pre-configured requests
   - Automated test scripts
   - Environment variables

### Swagger Documentation

Access interactive API documentation:

```
http://localhost:5000/api-docs
```

## Continuous Integration

### GitHub Actions Example

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run test:coverage
    
    - name: Upload coverage
      uses: codecov/codecov-action@v2
      with:
        files: ./coverage/lcov.info
```

## Troubleshooting

### Common Issues

#### 1. MongoDB Connection Errors

**Problem**: Tests fail with MongoDB connection errors

**Solution**:
```bash
# Make sure MongoDB Memory Server is installed
npm install --save-dev mongodb-memory-server

# Clear node modules and reinstall
rm -rf node_modules
npm install
```

#### 2. Port Already in Use

**Problem**: Test server fails to start

**Solution**:
- Tests use MongoDB Memory Server (no real MongoDB needed)
- If port conflicts occur, check `tests/helpers/setup.js`

#### 3. Test Timeout

**Problem**: Tests timeout after 5 seconds

**Solution**:
```javascript
// In individual test
test('should complete', async () => {
  // test code
}, 30000); // 30 second timeout

// Or in jest.config.js
module.exports = {
  testTimeout: 30000
};
```

#### 4. Coverage Not Generated

**Problem**: Coverage report is empty

**Solution**:
```bash
# Clear Jest cache
npm test -- --clearCache

# Run coverage again
npm run test:coverage
```

#### 5. Tests Passing Locally but Failing in CI

**Problem**: Environment differences

**Solution**:
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check environment variables
- Review CI logs for specific errors

### Debug Mode

```bash
# Run with Node debugger
node --inspect-brk node_modules/.bin/jest --runInBand

# Run specific test with logs
DEBUG=* npm test -- tests/unit/contactform.model.test.js
```

## Best Practices

### 1. Test Isolation

- Each test should be independent
- Use `beforeEach` and `afterEach` for setup/cleanup
- Don't rely on test execution order

### 2. Clear Test Names

```javascript
// Good
test('should return 400 when email is invalid', async () => {});

// Bad
test('test1', async () => {});
```

### 3. Arrange-Act-Assert Pattern

```javascript
test('should create user', async () => {
  // Arrange
  const userData = { name: 'John' };
  
  // Act
  const result = await createUser(userData);
  
  // Assert
  expect(result).toBeDefined();
  expect(result.name).toBe('John');
});
```

### 4. Mock External Dependencies

```javascript
// Mock email service
jest.mock('../../src/utils/emailService');
emailService.sendEmail = jest.fn().mockResolvedValue(true);
```

### 5. Use Test Data Factories

```javascript
// Reusable test data
const testData = TestDataFactory.validContactForm();
```

## Test Statistics

### Current Test Suite

- **Total Tests**: 100+
- **Unit Tests**: 50+
- **Integration Tests**: 30+
- **E2E Tests**: 20+
- **Test Coverage**: Target 70%+

### Test Execution Time

- Unit Tests: ~5-10 seconds
- Integration Tests: ~15-20 seconds
- E2E Tests: ~10-15 seconds
- **Total**: ~30-45 seconds

## Resources

- [Jest Documentation](https://jestjs.io/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [MongoDB Memory Server](https://github.com/nodkz/mongodb-memory-server)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

## Support

For issues or questions:
1. Check existing tests for examples
2. Review test helpers and utilities
3. Consult Jest documentation
4. Check troubleshooting section above

---

**Happy Testing! 🧪**
