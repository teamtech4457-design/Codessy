/**
 * Query API Testing Guide
 * This file contains all the test cases and examples for testing the Query APIs
 * 
 * Base URL: http://localhost:5000/api/queries
 * 
 * Available Endpoints:
 * 1. POST   /api/queries              - Submit a new query
 * 2. GET    /api/queries              - Get all queries with pagination and filtering
 * 3. GET    /api/queries/stats        - Get query statistics
 * 4. GET    /api/queries/pending      - Get all pending queries
 * 5. GET    /api/queries/:id          - Get query by ID
 * 6. PUT    /api/queries/:id          - Update query
 * 7. PATCH  /api/queries/:id/status   - Update query status
 * 8. PATCH  /api/queries/:id/assign   - Assign query to admin
 * 9. DELETE /api/queries/:id          - Delete query
 * 10. DELETE /api/queries/bulk        - Bulk delete queries
 */

const BASE_URL = 'http://localhost:5000/api/queries';

// =============================================================================
// 1. CREATE NEW QUERY
// =============================================================================

console.log('\n📝 TEST 1: Create New Query\n');

const testQuery1 = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    query: 'I need help implementing authentication in my React application. Can you provide guidance on using JWT tokens?',
    priority: 'high',
    category: 'technical-support'
};

const testQuery2 = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+9876543210',
    query: 'What are your pricing plans for enterprise solutions?',
    priority: 'medium',
    category: 'sales-inquiry'
};

const testQuery3 = {
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    phone: '+1122334455',
    query: 'I am facing issues with database connectivity. The connection keeps timing out.',
    priority: 'urgent',
    category: 'bug-report'
};

// Test with fetch
async function createQuery(queryData) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(queryData)
        });
        const data = await response.json();
        console.log('✅ Create Query Response:', JSON.stringify(data, null, 2));
        return data;
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// CURL command for testing
console.log('CURL Command:');
console.log(`
curl -X POST ${BASE_URL} \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "query": "I need help implementing authentication in my React application.",
    "priority": "high",
    "category": "technical-support"
  }'
`);

// PowerShell command for testing
console.log('\nPowerShell Command:');
console.log(`
$body = @{
    name = "John Doe"
    email = "john.doe@example.com"
    phone = "+1234567890"
    query = "I need help implementing authentication in my React application."
    priority = "high"
    category = "technical-support"
} | ConvertTo-Json

Invoke-RestMethod -Uri "${BASE_URL}" -Method POST -Body $body -ContentType "application/json"
`);

// =============================================================================
// 2. GET ALL QUERIES
// =============================================================================

console.log('\n📋 TEST 2: Get All Queries\n');

// Basic GET request
console.log('CURL Command (Basic):');
console.log(`curl -X GET ${BASE_URL}`);

// With pagination
console.log('\nCURL Command (With Pagination):');
console.log(`curl -X GET "${BASE_URL}?page=1&limit=10"`);

// With filtering
console.log('\nCURL Command (With Filters):');
console.log(`curl -X GET "${BASE_URL}?status=pending&priority=high&page=1&limit=10"`);

// With search
console.log('\nCURL Command (With Search):');
console.log(`curl -X GET "${BASE_URL}?search=authentication&page=1&limit=10"`);

// With sorting
console.log('\nCURL Command (With Sorting):');
console.log(`curl -X GET "${BASE_URL}?sortBy=createdAt&order=desc&page=1&limit=10"`);

// PowerShell command
console.log('\nPowerShell Command:');
console.log(`
Invoke-RestMethod -Uri "${BASE_URL}?page=1&limit=10&status=pending" -Method GET
`);

// =============================================================================
// 3. GET QUERY STATISTICS
// =============================================================================

console.log('\n📊 TEST 3: Get Query Statistics\n');

console.log('CURL Command:');
console.log(`curl -X GET ${BASE_URL}/stats`);

console.log('\nPowerShell Command:');
console.log(`Invoke-RestMethod -Uri "${BASE_URL}/stats" -Method GET`);

// =============================================================================
// 4. GET PENDING QUERIES
// =============================================================================

console.log('\n⏳ TEST 4: Get Pending Queries\n');

console.log('CURL Command:');
console.log(`curl -X GET ${BASE_URL}/pending`);

console.log('\nPowerShell Command:');
console.log(`Invoke-RestMethod -Uri "${BASE_URL}/pending" -Method GET`);

// =============================================================================
// 5. GET QUERY BY ID
// =============================================================================

console.log('\n🔍 TEST 5: Get Query By ID\n');

const sampleQueryId = '60d5ec49f1b2c72b8c8e4f1a';

console.log('CURL Command:');
console.log(`curl -X GET ${BASE_URL}/${sampleQueryId}`);

console.log('\nPowerShell Command:');
console.log(`Invoke-RestMethod -Uri "${BASE_URL}/${sampleQueryId}" -Method GET`);

// =============================================================================
// 6. UPDATE QUERY
// =============================================================================

console.log('\n✏️ TEST 6: Update Query\n');

const updateData = {
    status: 'in-progress',
    priority: 'urgent',
    assignedTo: 'admin@codessey.com'
};

console.log('CURL Command:');
console.log(`
curl -X PUT ${BASE_URL}/${sampleQueryId} \\
  -H "Content-Type: application/json" \\
  -d '{
    "status": "in-progress",
    "priority": "urgent",
    "assignedTo": "admin@codessey.com"
  }'
`);

console.log('\nPowerShell Command:');
console.log(`
$body = @{
    status = "in-progress"
    priority = "urgent"
    assignedTo = "admin@codessey.com"
} | ConvertTo-Json

Invoke-RestMethod -Uri "${BASE_URL}/${sampleQueryId}" -Method PUT -Body $body -ContentType "application/json"
`);

// =============================================================================
// 7. UPDATE QUERY STATUS
// =============================================================================

console.log('\n🔄 TEST 7: Update Query Status\n');

// Mark as in-progress
console.log('CURL Command (In Progress):');
console.log(`
curl -X PATCH ${BASE_URL}/${sampleQueryId}/status \\
  -H "Content-Type: application/json" \\
  -d '{
    "status": "in-progress"
  }'
`);

// Mark as resolved with response
console.log('\nCURL Command (Resolved with Response):');
console.log(`
curl -X PATCH ${BASE_URL}/${sampleQueryId}/status \\
  -H "Content-Type: application/json" \\
  -d '{
    "status": "resolved",
    "response": "We have implemented JWT authentication for your React application. Please check the documentation we sent via email."
  }'
`);

console.log('\nPowerShell Command:');
console.log(`
$body = @{
    status = "resolved"
    response = "We have implemented JWT authentication for your React application."
} | ConvertTo-Json

Invoke-RestMethod -Uri "${BASE_URL}/${sampleQueryId}/status" -Method PATCH -Body $body -ContentType "application/json"
`);

// =============================================================================
// 8. ASSIGN QUERY TO ADMIN
// =============================================================================

console.log('\n👤 TEST 8: Assign Query to Admin\n');

console.log('CURL Command:');
console.log(`
curl -X PATCH ${BASE_URL}/${sampleQueryId}/assign \\
  -H "Content-Type: application/json" \\
  -d '{
    "assignedTo": "admin@codessey.com"
  }'
`);

console.log('\nPowerShell Command:');
console.log(`
$body = @{
    assignedTo = "admin@codessey.com"
} | ConvertTo-Json

Invoke-RestMethod -Uri "${BASE_URL}/${sampleQueryId}/assign" -Method PATCH -Body $body -ContentType "application/json"
`);

// =============================================================================
// 9. DELETE QUERY
// =============================================================================

console.log('\n🗑️ TEST 9: Delete Query\n');

console.log('CURL Command:');
console.log(`curl -X DELETE ${BASE_URL}/${sampleQueryId}`);

console.log('\nPowerShell Command:');
console.log(`Invoke-RestMethod -Uri "${BASE_URL}/${sampleQueryId}" -Method DELETE`);

// =============================================================================
// 10. BULK DELETE QUERIES
// =============================================================================

console.log('\n🗑️ TEST 10: Bulk Delete Queries\n');

const queryIds = [
    '60d5ec49f1b2c72b8c8e4f1a',
    '60d5ec49f1b2c72b8c8e4f1b',
    '60d5ec49f1b2c72b8c8e4f1c'
];

console.log('CURL Command:');
console.log(`
curl -X DELETE ${BASE_URL}/bulk \\
  -H "Content-Type: application/json" \\
  -d '{
    "ids": ["60d5ec49f1b2c72b8c8e4f1a", "60d5ec49f1b2c72b8c8e4f1b", "60d5ec49f1b2c72b8c8e4f1c"]
  }'
`);

console.log('\nPowerShell Command:');
console.log(`
$body = @{
    ids = @("60d5ec49f1b2c72b8c8e4f1a", "60d5ec49f1b2c72b8c8e4f1b", "60d5ec49f1b2c72b8c8e4f1c")
} | ConvertTo-Json

Invoke-RestMethod -Uri "${BASE_URL}/bulk" -Method DELETE -Body $body -ContentType "application/json"
`);

// =============================================================================
// POSTMAN COLLECTION EXAMPLES
// =============================================================================

console.log('\n\n📮 POSTMAN COLLECTION\n');

const postmanCollection = {
    info: {
        name: 'Codessey Query API',
        description: 'Complete API collection for Query management',
        schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: [
        {
            name: 'Create Query',
            request: {
                method: 'POST',
                header: [
                    {
                        key: 'Content-Type',
                        value: 'application/json'
                    }
                ],
                body: {
                    mode: 'raw',
                    raw: JSON.stringify(testQuery1, null, 2)
                },
                url: {
                    raw: BASE_URL,
                    protocol: 'http',
                    host: ['localhost'],
                    port: '5000',
                    path: ['api', 'queries']
                }
            }
        },
        {
            name: 'Get All Queries',
            request: {
                method: 'GET',
                url: {
                    raw: `${BASE_URL}?page=1&limit=10`,
                    protocol: 'http',
                    host: ['localhost'],
                    port: '5000',
                    path: ['api', 'queries'],
                    query: [
                        { key: 'page', value: '1' },
                        { key: 'limit', value: '10' }
                    ]
                }
            }
        },
        {
            name: 'Get Query Statistics',
            request: {
                method: 'GET',
                url: `${BASE_URL}/stats`
            }
        }
    ]
};

console.log('Postman Collection JSON:');
console.log(JSON.stringify(postmanCollection, null, 2));

// =============================================================================
// ERROR HANDLING TEST CASES
// =============================================================================

console.log('\n\n⚠️ ERROR HANDLING TEST CASES\n');

// Missing required fields
console.log('1. Missing Required Fields:');
console.log(`
curl -X POST ${BASE_URL} \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com"
  }'
`);

// Invalid email format
console.log('\n2. Invalid Email Format:');
console.log(`
curl -X POST ${BASE_URL} \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "invalid-email",
    "phone": "+1234567890",
    "query": "Test query"
  }'
`);

// Invalid query ID
console.log('\n3. Invalid Query ID:');
console.log(`curl -X GET ${BASE_URL}/invalid-id`);

// Query not found
console.log('\n4. Query Not Found:');
console.log(`curl -X GET ${BASE_URL}/60d5ec49f1b2c72b8c8e4999`);

// =============================================================================
// COMPLETE WORKFLOW TEST
// =============================================================================

console.log('\n\n🔄 COMPLETE WORKFLOW TEST\n');

async function completeWorkflowTest() {
    console.log('Step 1: Create a new query');
    const createResponse = await createQuery(testQuery1);
    const queryId = createResponse?.data?._id;
    
    if (!queryId) {
        console.error('Failed to create query');
        return;
    }
    
    console.log(`\nStep 2: Get query by ID: ${queryId}`);
    // await getQueryById(queryId);
    
    console.log('\nStep 3: Assign query to admin');
    // await assignQuery(queryId, 'admin@codessey.com');
    
    console.log('\nStep 4: Update query status to in-progress');
    // await updateQueryStatus(queryId, 'in-progress');
    
    console.log('\nStep 5: Mark query as resolved');
    // await updateQueryStatus(queryId, 'resolved', 'Your issue has been resolved.');
    
    console.log('\nStep 6: Get all queries');
    // await getAllQueries();
    
    console.log('\nStep 7: Get statistics');
    // await getStatistics();
}

// Uncomment to run complete workflow
// completeWorkflowTest();

console.log('\n\n✅ All test cases documented!\n');
console.log('📚 Visit http://localhost:5000/api-docs for Swagger documentation\n');
console.log('🚀 To test the APIs:');
console.log('   1. Make sure the server is running: node index.js');
console.log('   2. Use the CURL or PowerShell commands above');
console.log('   3. Or import the Postman collection');
console.log('   4. Or use Swagger UI at http://localhost:5000/api-docs\n');

module.exports = {
    BASE_URL,
    testQuery1,
    testQuery2,
    testQuery3,
    createQuery,
    completeWorkflowTest
};
