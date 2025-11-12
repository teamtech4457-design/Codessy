# Manual Testing Guide - Codessey API

This guide provides comprehensive manual testing instructions for the Codessey API using various tools like Postman, cURL, and browser-based testing.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [API Base URL](#api-base-url)
3. [Contact Form API Tests](#contact-form-api-tests)
4. [Query API Tests](#query-api-tests)
5. [Postman Collection](#postman-collection)
6. [cURL Examples](#curl-examples)
7. [Browser Testing](#browser-testing)

## Prerequisites

- API Server running (default: http://localhost:5000)
- Postman (optional)
- cURL (optional)
- MongoDB running

### Start the Server

```bash
npm start
# or for development
npm run dev
```

## API Base URL

```
Local: http://localhost:5000
Production: [Your production URL]
```

## Contact Form API Tests

### 1. Create Contact Form (POST)

**Endpoint:** `POST /api/contact`

**Valid Request:**
```json
{
  "email": "john.doe@example.com",
  "name": "John Doe",
  "phone": "+1234567890",
  "companyName": "Tech Solutions Inc",
  "companyEmail": "info@techsolutions.com",
  "projectTitle": "Mobile App Development",
  "projectDescription": "We need a mobile application for our e-commerce platform that supports both iOS and Android devices."
}
```

**Expected Response (201):**
```json
{
  "success": true,
  "message": "Contact form submitted successfully! We will get back to you soon.",
  "data": {
    "_id": "...",
    "email": "john.doe@example.com",
    "name": "John Doe",
    "phone": "+1234567890",
    "companyName": "Tech Solutions Inc",
    "companyEmail": "info@techsolutions.com",
    "projectTitle": "Mobile App Development",
    "projectDescription": "We need a mobile application...",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Test Cases:**

#### Test 1: Valid Submission
- Use the valid request above
- Expected: Status 201, success message

#### Test 2: Missing Required Fields
```json
{
  "email": "test@example.com",
  "name": "Test User"
}
```
- Expected: Status 400, error message about missing fields

#### Test 3: Invalid Email Format
```json
{
  "email": "invalid-email",
  "name": "John Doe",
  "phone": "+1234567890",
  "companyName": "Tech Solutions",
  "companyEmail": "info@techsolutions.com",
  "projectTitle": "Project",
  "projectDescription": "Description of the project"
}
```
- Expected: Status 400, validation error

#### Test 4: Invalid Phone Format
```json
{
  "email": "test@example.com",
  "name": "John Doe",
  "phone": "abc123",
  "companyName": "Tech Solutions",
  "companyEmail": "info@techsolutions.com",
  "projectTitle": "Project",
  "projectDescription": "Description"
}
```
- Expected: Status 400, validation error

### 2. Get All Contact Forms (GET)

**Endpoint:** `GET /api/contact`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `sort` (optional): Sort field (default: -createdAt)
- `search` (optional): Search term

**Examples:**

#### Test 1: Get All Forms (Default)
```
GET /api/contact
```

#### Test 2: Pagination
```
GET /api/contact?page=2&limit=5
```

#### Test 3: Search
```
GET /api/contact?search=John
```

#### Test 4: Custom Sort
```
GET /api/contact?sort=name
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Contact forms retrieved successfully",
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10
  }
}
```

### 3. Get Contact Form by ID (GET)

**Endpoint:** `GET /api/contact/:id`

**Example:**
```
GET /api/contact/507f1f77bcf86cd799439011
```

**Test Cases:**

#### Test 1: Valid ID
- Use a valid MongoDB ObjectId from created forms
- Expected: Status 200, form data

#### Test 2: Non-existent ID
- Use: `507f1f77bcf86cd799439011`
- Expected: Status 404, not found message

#### Test 3: Invalid ID Format
- Use: `invalid-id`
- Expected: Status 400, invalid ID message

### 4. Update Contact Form (PUT)

**Endpoint:** `PUT /api/contact/:id`

**Request Body:**
```json
{
  "name": "Updated Name",
  "projectTitle": "Updated Project Title"
}
```

**Test Cases:**

#### Test 1: Valid Update
- Use valid ID and update data
- Expected: Status 200, updated data

#### Test 2: Update with Invalid Data
```json
{
  "email": "invalid-email"
}
```
- Expected: Status 400, validation error

### 5. Delete Contact Form (DELETE)

**Endpoint:** `DELETE /api/contact/:id`

**Test Cases:**

#### Test 1: Valid Deletion
- Use valid ID
- Expected: Status 200, deletion confirmation

#### Test 2: Delete Non-existent
- Use non-existent ID
- Expected: Status 404

## Query API Tests

### 1. Create Query (POST)

**Endpoint:** `POST /api/queries`

**Valid Request:**
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "phone": "+9876543210",
  "query": "I would like to know more about your web development services. Can you provide information about pricing and timelines?",
  "priority": "medium",
  "category": "general"
}
```

**Expected Response (201):**
```json
{
  "success": true,
  "message": "Query submitted successfully! We will respond soon.",
  "data": {
    "_id": "...",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "phone": "+9876543210",
    "query": "I would like to know...",
    "priority": "medium",
    "category": "general",
    "status": "pending",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

**Test Cases:**

#### Test 1: Valid Query with All Fields
- Use the valid request above
- Expected: Status 201

#### Test 2: Minimum Required Fields
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "query": "This is a test query with sufficient length to pass validation."
}
```
- Expected: Status 201, default priority: medium, category: general

#### Test 3: Urgent Priority
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+9876543210",
  "query": "Urgent issue with our production server needs immediate attention!",
  "priority": "urgent",
  "category": "technical"
}
```
- Expected: Status 201, priority: urgent

#### Test 4: Missing Required Fields
```json
{
  "name": "Test User",
  "email": "test@example.com"
}
```
- Expected: Status 400

#### Test 5: Invalid Email
```json
{
  "name": "Test User",
  "email": "invalid-email",
  "phone": "+1234567890",
  "query": "Test query"
}
```
- Expected: Status 400

### 2. Get All Queries (GET)

**Endpoint:** `GET /api/queries`

**Query Parameters:**
- `page`: Page number
- `limit`: Items per page
- `sort`: Sort field
- `search`: Search term
- `status`: Filter by status (pending, in-progress, resolved, closed)
- `priority`: Filter by priority (low, medium, high, urgent)
- `category`: Filter by category

**Examples:**

#### Test 1: Get All Queries
```
GET /api/queries
```

#### Test 2: Filter by Status
```
GET /api/queries?status=pending
```

#### Test 3: Filter by Priority
```
GET /api/queries?priority=urgent
```

#### Test 4: Filter by Category
```
GET /api/queries?category=technical
```

#### Test 5: Combined Filters
```
GET /api/queries?status=pending&priority=high&page=1&limit=10
```

#### Test 6: Search Queries
```
GET /api/queries?search=server
```

### 3. Get Query by ID (GET)

**Endpoint:** `GET /api/queries/:id`

**Test Cases:**

#### Test 1: Valid ID
```
GET /api/queries/[valid-id]
```
- Expected: Status 200

#### Test 2: Invalid ID
```
GET /api/queries/invalid-id
```
- Expected: Status 400

#### Test 3: Non-existent ID
```
GET /api/queries/507f1f77bcf86cd799439011
```
- Expected: Status 404

### 4. Update Query (PUT)

**Endpoint:** `PUT /api/queries/:id`

**Test Cases:**

#### Test 1: Update Status to In-Progress
```json
{
  "status": "in-progress"
}
```

#### Test 2: Resolve Query with Response
```json
{
  "status": "resolved",
  "response": "Thank you for your query. Here is our detailed response to your question..."
}
```

#### Test 3: Update Priority
```json
{
  "priority": "high"
}
```

#### Test 4: Assign Query
```json
{
  "assignedTo": "admin@example.com",
  "status": "in-progress"
}
```

#### Test 5: Close Query
```json
{
  "status": "closed"
}
```

### 5. Delete Query (DELETE)

**Endpoint:** `DELETE /api/queries/:id`

**Test Cases:**

#### Test 1: Delete Existing Query
- Use valid query ID
- Expected: Status 200

#### Test 2: Delete Non-existent Query
- Expected: Status 404

### 6. Get Query Statistics (GET)

**Endpoint:** `GET /api/queries/statistics`

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "total": 100,
    "byStatus": {
      "pending": 30,
      "in-progress": 20,
      "resolved": 40,
      "closed": 10
    },
    "byPriority": {
      "low": 20,
      "medium": 40,
      "high": 30,
      "urgent": 10
    },
    "byCategory": {
      "general": 50,
      "technical": 30,
      "billing": 10,
      "support": 10
    }
  }
}
```

## cURL Examples

### Contact Form - Create
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "phone": "+1234567890",
    "companyName": "Test Company",
    "companyEmail": "company@example.com",
    "projectTitle": "Test Project",
    "projectDescription": "This is a test project description"
  }'
```

### Contact Form - Get All
```bash
curl -X GET http://localhost:5000/api/contact
```

### Query - Create
```bash
curl -X POST http://localhost:5000/api/queries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "query": "This is a test query with sufficient length",
    "priority": "medium"
  }'
```

### Query - Update Status
```bash
curl -X PUT http://localhost:5000/api/queries/[QUERY_ID] \
  -H "Content-Type: application/json" \
  -d '{
    "status": "in-progress"
  }'
```

## Browser Testing

### Using Browser Console

1. Open your browser's developer console (F12)
2. Use the Fetch API:

```javascript
// Create Contact Form
fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'test@example.com',
    name: 'Test User',
    phone: '+1234567890',
    companyName: 'Test Company',
    companyEmail: 'company@example.com',
    projectTitle: 'Test Project',
    projectDescription: 'Test description'
  })
})
.then(response => response.json())
.then(data => console.log(data));

// Get All Contact Forms
fetch('http://localhost:5000/api/contact')
  .then(response => response.json())
  .then(data => console.log(data));

// Create Query
fetch('http://localhost:5000/api/queries', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    query: 'This is a test query with sufficient content'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## Testing Checklist

### Contact Form Testing
- [ ] Create with valid data
- [ ] Create with missing fields
- [ ] Create with invalid email
- [ ] Create with invalid phone
- [ ] Get all forms
- [ ] Get with pagination
- [ ] Get with search
- [ ] Get by ID (valid)
- [ ] Get by ID (invalid)
- [ ] Update form
- [ ] Delete form

### Query Testing
- [ ] Create with all fields
- [ ] Create with minimum fields
- [ ] Create with urgent priority
- [ ] Create with different categories
- [ ] Get all queries
- [ ] Filter by status
- [ ] Filter by priority
- [ ] Filter by category
- [ ] Get by ID
- [ ] Update status
- [ ] Add response
- [ ] Delete query
- [ ] Get statistics

### Error Handling
- [ ] Invalid JSON format
- [ ] Invalid ObjectId format
- [ ] Non-existent resources
- [ ] Validation errors
- [ ] Database connection errors

## Notes

- All email functionality is mocked in test environment
- Replace `localhost:5000` with your actual server URL
- Save valid IDs for update/delete operations
- Check server logs for detailed error information
- Use Swagger documentation at `/api-docs` for interactive testing
