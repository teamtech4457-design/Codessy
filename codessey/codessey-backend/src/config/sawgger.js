const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/**
 * Swagger JSDoc Configuration
 */
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Codessey Contact Form API',
            version: '1.0.0',
            description: 'RESTful API for managing contact form submissions with email notifications',
            contact: {
                name: 'Codessey Team',
                email: 'campaignwalatech@gmail.com'
            },
            license: {
                name: 'ISC',
                url: 'https://opensource.org/licenses/ISC'
            }
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 5000}`,
                description: 'Development server'
            },
            {
                url: 'https://api.codessey.com',
                description: 'Production server'
            }
        ],
        tags: [
            {
                name: 'Contact Forms',
                description: 'Contact form submission management endpoints'
            }
        ],
        components: {
            schemas: {
                ContactForm: {
                    type: 'object',
                    required: ['email', 'name', 'phone', 'companyName', 'companyEmail', 'projectTitle', 'projectDescription'],
                    properties: {
                        _id: {
                            type: 'string',
                            description: 'Auto-generated unique identifier',
                            example: '507f1f77bcf86cd799439011'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'Contact person email address',
                            example: 'john.doe@example.com'
                        },
                        name: {
                            type: 'string',
                            description: 'Full name of the contact person',
                            example: 'John Doe'
                        },
                        phone: {
                            type: 'string',
                            description: 'Contact phone number',
                            example: '+1234567890'
                        },
                        companyName: {
                            type: 'string',
                            description: 'Name of the company',
                            example: 'Tech Solutions Inc.'
                        },
                        companyEmail: {
                            type: 'string',
                            format: 'email',
                            description: 'Official company email address',
                            example: 'info@techsolutions.com'
                        },
                        projectTitle: {
                            type: 'string',
                            description: 'Title of the project',
                            example: 'E-commerce Website Development'
                        },
                        projectDescription: {
                            type: 'string',
                            description: 'Detailed description of the project',
                            example: 'We need a modern e-commerce platform with payment gateway integration...'
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Timestamp when the form was submitted'
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Timestamp when the form was last updated'
                        }
                    }
                },
                Error: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: false
                        },
                        message: {
                            type: 'string',
                            example: 'Error message description'
                        },
                        error: {
                            type: 'string',
                            example: 'Detailed error information'
                        }
                    }
                },
                Success: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: true
                        },
                        message: {
                            type: 'string',
                            example: 'Operation successful'
                        },
                        data: {
                            type: 'object'
                        }
                    }
                }
            },
            responses: {
                UnauthorizedError: {
                    description: 'Access token is missing or invalid',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error'
                            }
                        }
                    }
                },
                NotFoundError: {
                    description: 'The specified resource was not found',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error'
                            }
                        }
                    }
                },
                ValidationError: {
                    description: 'Validation error in request data',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error'
                            }
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/router.js/*.js', './index.js'] // Path to the API routes with JSDoc comments
};

// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

/**
 * Setup Swagger UI
 * @param {Express.Application} app - Express application instance
 */
const setupSwagger = (app) => {
    // Swagger UI options
    const swaggerUiOptions = {
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: 'Codessey API Documentation',
        customfavIcon: '/favicon.ico',
        swaggerOptions: {
            persistAuthorization: true,
            displayRequestDuration: true,
            filter: true,
            syntaxHighlight: {
                activate: true,
                theme: 'monokai'
            }
        }
    };

    // Serve Swagger documentation
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

    // Serve Swagger JSON
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log(`📚 Swagger documentation available at: http://localhost:${process.env.PORT || 5000}/api-docs`);
};

module.exports = { setupSwagger, swaggerSpec };
