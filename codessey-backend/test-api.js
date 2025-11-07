/**
 * Test Script for Contact Form API
 * Run this after starting the server to test all endpoints
 */

const testContactFormAPI = async () => {
    const baseURL = 'http://localhost:5000';
    
    console.log('🧪 Testing Codessey Contact Form API...\n');
    
    // Test 1: Health Check
    console.log('1️⃣ Testing Health Check...');
    try {
        const response = await fetch(`${baseURL}/health`);
        const data = await response.json();
        console.log('✅ Health Check:', data.message);
    } catch (error) {
        console.error('❌ Health Check Failed:', error.message);
    }
    
    // Test 2: Submit Contact Form
    console.log('\n2️⃣ Testing Contact Form Submission...');
    try {
        const contactData = {
            email: 'john.doe@example.com',
            name: 'John Doe',
            phone: '+1234567890',
            companyName: 'Tech Solutions Inc.',
            companyEmail: 'info@techsolutions.com',
            projectTitle: 'E-commerce Website Development',
            projectDescription: 'We need a modern e-commerce platform with payment gateway integration, inventory management, and customer portal. The platform should support multiple vendors and have a responsive design.'
        };
        
        const response = await fetch(`${baseURL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            console.log('✅ Contact Form Submitted Successfully!');
            console.log('📧 Email sent to: campaignwalatech@gmail.com');
            console.log('📝 Submission ID:', data.data._id);
            
            // Store ID for further tests
            global.submissionId = data.data._id;
        } else {
            console.log('❌ Submission Failed:', data.message);
        }
    } catch (error) {
        console.error('❌ Submission Error:', error.message);
    }
    
    // Test 3: Get All Submissions
    console.log('\n3️⃣ Testing Get All Submissions...');
    try {
        const response = await fetch(`${baseURL}/api/contact?page=1&limit=5`);
        const data = await response.json();
        
        if (data.success) {
            console.log('✅ Retrieved', data.data.length, 'submissions');
            console.log('📊 Total items:', data.pagination.totalItems);
        }
    } catch (error) {
        console.error('❌ Get All Failed:', error.message);
    }
    
    // Test 4: Get Statistics
    console.log('\n4️⃣ Testing Statistics...');
    try {
        const response = await fetch(`${baseURL}/api/contact/stats`);
        const data = await response.json();
        
        if (data.success) {
            console.log('✅ Statistics Retrieved:');
            console.log('   Total Submissions:', data.data.totalSubmissions);
            console.log('   Today\'s Submissions:', data.data.todaySubmissions);
        }
    } catch (error) {
        console.error('❌ Statistics Failed:', error.message);
    }
    
    // Test 5: Get Single Submission
    if (global.submissionId) {
        console.log('\n5️⃣ Testing Get Single Submission...');
        try {
            const response = await fetch(`${baseURL}/api/contact/${global.submissionId}`);
            const data = await response.json();
            
            if (data.success) {
                console.log('✅ Retrieved submission for:', data.data.name);
            }
        } catch (error) {
            console.error('❌ Get Single Failed:', error.message);
        }
    }
    
    console.log('\n✨ All tests completed!');
    console.log('\n📚 Open Swagger UI for interactive testing:');
    console.log('   👉 http://localhost:5000/api-docs\n');
};

// Run tests
testContactFormAPI();
