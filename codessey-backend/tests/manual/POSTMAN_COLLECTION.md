# Postman Collection - Codessey API Testing

This document provides instructions for importing and using the Codessey API Postman collection.

## Postman Collection JSON

Save this as `Codessey_API_Tests.postman_collection.json`:

```json
{
  "info": {
    "name": "Codessey API Tests",
    "description": "Complete API testing collection for Codessey Contact Form and Query APIs",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:5000",
      "type": "string"
    },
    {
      "key": "contactId",
      "value": "",
      "type": "string"
    },
    {
      "key": "queryId",
      "value": "",
      "type": "string"
    }
  ],
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/health",
          "host": ["{{baseUrl}}"],
          "path": ["health"]
        }
      }
    },
    {
      "name": "Contact Form",
      "item": [
        {
          "name": "Create Contact Form - Valid",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test('Status code is 201', function () {",
                  "    pm.response.to.have.status(201);",
                  "});",
                  "",
                  "pm.test('Response has success true', function () {",
                  "    var jsonData = pm.response.json();",
                  "    pm.expect(jsonData.success).to.eql(true);",
                  "});",
                  "",
                  "pm.test('Response contains data', function () {",
                  "    var jsonData = pm.response.json();",
                  "    pm.expect(jsonData.data).to.have.property('_id');",
                  "    pm.variables.set('contactId', jsonData.data._id);",
                  "});"
                ]
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"email\": \"john.doe@example.com\",\n  \"name\": \"John Doe\",\n  \"phone\": \"+1234567890\",\n  \"companyName\": \"Tech Solutions Inc\",\n  \"companyEmail\": \"info@techsolutions.com\",\n  \"projectTitle\": \"Mobile App Development\",\n  \"projectDescription\": \"We need a mobile application for our e-commerce platform that supports both iOS and Android devices.\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/api/contact",
              "host": ["{{baseUrl}}"],
              "path": ["api", "contact"]
            }
          }
        },
        {
          "name": "Create Contact Form - Missing Fields",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test('Status code is 400', function () {",
                  "    pm.response.to.have.status(400);",
                  "});",
                  "",
                  "pm.test('Response has success false', function () {",
                  "    var jsonData = pm.response.json();",
                  "    pm.expect(jsonData.success).to.eql(false);",
                  "});"
                ]
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Test User\",\n  \"email\": \"test@example.com\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/api/contact",
              "host": ["{{baseUrl}}"],
              "path": ["api", "contact"]
            }
          }
        },
        {
          "name": "Get All Contact Forms",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test('Status code is 200', function () {",
                  "    pm.response.to.have.status(200);",
                  "});",
                  "",
                  "pm.test('Response is array', function () {",
                  "    var jsonData = pm.response.json();",
                  "    pm.expect(jsonData.data).to.be.an('array');",
                  "});",
                  "",
                  "pm.test('Has pagination', function () {",
                  "    var jsonData = pm.response.json();",
                  "    pm.expect(jsonData.pagination).to.exist;",
                  "});"
                ]
              }
            }
          ],
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/api/contact",
              "host": ["{{baseUrl}}"],
              "path": ["api", "contact"]
            }
          }
        },
        {
          "name": "Get Contact Form by ID",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/api/contact/{{contactId}}",
              "host": ["{{baseUrl}}"],
              "path": ["api", "contact", "{{contactId}}"]
            }
          }
        },
        {
          "name": "Update Contact Form",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Updated Name\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/api/contact/{{contactId}}",
              "host": ["{{baseUrl}}"],
              "path": ["api", "contact", "{{contactId}}"]
            }
          }
        },
        {
          "name": "Delete Contact Form",
          "request": {
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/api/contact/{{contactId}}",
              "host": ["{{baseUrl}}"],
              "path": ["api", "contact", "{{contactId}}"]
            }
          }
        }
      ]
    },
    {
      "name": "Queries",
      "item": [
        {
          "name": "Create Query - Valid",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test('Status code is 201', function () {",
                  "    pm.response.to.have.status(201);",
                  "});",
                  "",
                  "pm.test('Response has success true', function () {",
                  "    var jsonData = pm.response.json();",
                  "    pm.expect(jsonData.success).to.eql(true);",
                  "});",
                  "",
                  "pm.test('Query status is pending', function () {",
                  "    var jsonData = pm.response.json();",
                  "    pm.expect(jsonData.data.status).to.eql('pending');",
                  "    pm.variables.set('queryId', jsonData.data._id);",
                  "});"
                ]
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Jane Smith\",\n  \"email\": \"jane.smith@example.com\",\n  \"phone\": \"+9876543210\",\n  \"query\": \"I would like to know more about your web development services. Can you provide information about pricing and timelines?\",\n  \"priority\": \"medium\",\n  \"category\": \"general\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/api/queries",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries"]
            }
          }
        },
        {
          "name": "Create Query - Urgent",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Emergency User\",\n  \"email\": \"urgent@example.com\",\n  \"phone\": \"+1111111111\",\n  \"query\": \"Urgent issue with production server. Need immediate assistance!\",\n  \"priority\": \"urgent\",\n  \"category\": \"technical\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/api/queries",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries"]
            }
          }
        },
        {
          "name": "Get All Queries",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/api/queries",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries"]
            }
          }
        },
        {
          "name": "Get Queries - Filter by Status",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/api/queries?status=pending",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries"],
              "query": [
                {
                  "key": "status",
                  "value": "pending"
                }
              ]
            }
          }
        },
        {
          "name": "Get Queries - Filter by Priority",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/api/queries?priority=urgent",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries"],
              "query": [
                {
                  "key": "priority",
                  "value": "urgent"
                }
              ]
            }
          }
        },
        {
          "name": "Get Query by ID",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/api/queries/{{queryId}}",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries", "{{queryId}}"]
            }
          }
        },
        {
          "name": "Update Query - In Progress",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"status\": \"in-progress\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/api/queries/{{queryId}}",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries", "{{queryId}}"]
            }
          }
        },
        {
          "name": "Update Query - Resolve with Response",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"status\": \"resolved\",\n  \"response\": \"Thank you for your query. We have reviewed your request and here is our detailed response...\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/api/queries/{{queryId}}",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries", "{{queryId}}"]
            }
          }
        },
        {
          "name": "Get Query Statistics",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/api/queries/statistics",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries", "statistics"]
            }
          }
        },
        {
          "name": "Delete Query",
          "request": {
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/api/queries/{{queryId}}",
              "host": ["{{baseUrl}}"],
              "path": ["api", "queries", "{{queryId}}"]
            }
          }
        }
      ]
    }
  ]
}
```

## How to Import

1. Open Postman
2. Click "Import" button
3. Select "File" tab
4. Choose the saved JSON file
5. Click "Import"

## Environment Variables

Set these variables in Postman:

- `baseUrl`: `http://localhost:5000` (or your server URL)
- `contactId`: (will be auto-set by tests)
- `queryId`: (will be auto-set by tests)

## Running Tests

1. **Run Individual Requests**: Click on any request and hit "Send"
2. **Run Folder**: Right-click on a folder and select "Run folder"
3. **Run Collection**: Click on "..." next to collection name and select "Run collection"

## Test Scripts

The collection includes automated test scripts that:
- Validate response status codes
- Check response structure
- Verify data integrity
- Auto-save IDs for subsequent requests

## Recommended Testing Order

1. Health Check
2. Contact Form - Create Valid
3. Contact Form - Get All
4. Contact Form - Get by ID
5. Contact Form - Update
6. Contact Form - Delete
7. Queries - Create Valid
8. Queries - Get All
9. Queries - Filter by Status
10. Queries - Update to In Progress
11. Queries - Resolve with Response
12. Queries - Get Statistics
13. Queries - Delete
