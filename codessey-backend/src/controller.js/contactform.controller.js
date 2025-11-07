const ContactForm = require('../model.js/contactform.model');
const emailService = require('../utils/emailService');

/**
 * Contact Form Controller
 * Handles all CRUD operations for contact form submissions
 */
class ContactFormController {
    /**
     * Create a new contact form submission
     * @route POST /api/contact
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     */
    async createContactForm(req, res) {
        try {
            const {
                email,
                name,
                phone,
                companyName,
                companyEmail,
                projectTitle,
                projectDescription
            } = req.body;

            // Validate required fields
            if (!email || !name || !phone || !companyName || !companyEmail || !projectTitle || !projectDescription) {
                return res.status(400).json({
                    success: false,
                    message: 'All fields are required',
                    missingFields: {
                        email: !email,
                        name: !name,
                        phone: !phone,
                        companyName: !companyName,
                        companyEmail: !companyEmail,
                        projectTitle: !projectTitle,
                        projectDescription: !projectDescription
                    }
                });
            }

            // Create new contact form entry
            const contactForm = new ContactForm({
                email,
                name,
                phone,
                companyName,
                companyEmail,
                projectTitle,
                projectDescription
            });

            // Save to database
            const savedContactForm = await contactForm.save();

            // Send email notification (don't block the response)
            emailService.sendContactFormEmail(savedContactForm.toObject())
                .then(() => {
                    console.log('✅ Notification email sent successfully');
                    // Send confirmation email to user
                    return emailService.sendConfirmationEmail(savedContactForm.toObject());
                })
                .catch(error => {
                    console.error('⚠️  Email notification failed:', error.message);
                });

            // Return success response
            res.status(201).json({
                success: true,
                message: 'Contact form submitted successfully! We will get back to you soon.',
                data: savedContactForm
            });

        } catch (error) {
            console.error('❌ Error creating contact form:', error);

            // Handle validation errors
            if (error.name === 'ValidationError') {
                return res.status(400).json({
                    success: false,
                    message: 'Validation error',
                    errors: Object.keys(error.errors).map(key => ({
                        field: key,
                        message: error.errors[key].message
                    }))
                });
            }

            // Handle duplicate key errors
            if (error.code === 11000) {
                return res.status(409).json({
                    success: false,
                    message: 'A submission with this information already exists'
                });
            }

            // Handle other errors
            res.status(500).json({
                success: false,
                message: 'Failed to submit contact form',
                error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
            });
        }
    }

    /**
     * Get all contact form submissions
     * @route GET /api/contact
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     */
    async getAllContactForms(req, res) {
        try {
            const { page = 1, limit = 10, sort = '-createdAt', search = '' } = req.query;

            // Build search query
            const searchQuery = search ? {
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                    { companyName: { $regex: search, $options: 'i' } },
                    { projectTitle: { $regex: search, $options: 'i' } }
                ]
            } : {};

            // Get total count
            const totalCount = await ContactForm.countDocuments(searchQuery);

            // Get paginated results
            const contactForms = await ContactForm.find(searchQuery)
                .sort(sort)
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec();

            res.status(200).json({
                success: true,
                message: 'Contact forms retrieved successfully',
                data: contactForms,
                pagination: {
                    currentPage: parseInt(page),
                    totalPages: Math.ceil(totalCount / limit),
                    totalItems: totalCount,
                    itemsPerPage: parseInt(limit)
                }
            });

        } catch (error) {
            console.error('❌ Error fetching contact forms:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve contact forms',
                error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
            });
        }
    }

    /**
     * Get a single contact form submission by ID
     * @route GET /api/contact/:id
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     */
    async getContactFormById(req, res) {
        try {
            const { id } = req.params;

            const contactForm = await ContactForm.findById(id);

            if (!contactForm) {
                return res.status(404).json({
                    success: false,
                    message: 'Contact form not found'
                });
            }

            res.status(200).json({
                success: true,
                message: 'Contact form retrieved successfully',
                data: contactForm
            });

        } catch (error) {
            console.error('❌ Error fetching contact form:', error);

            if (error.name === 'CastError') {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid contact form ID'
                });
            }

            res.status(500).json({
                success: false,
                message: 'Failed to retrieve contact form',
                error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
            });
        }
    }

    /**
     * Update a contact form submission
     * @route PUT /api/contact/:id
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     */
    async updateContactForm(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;

            const contactForm = await ContactForm.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );

            if (!contactForm) {
                return res.status(404).json({
                    success: false,
                    message: 'Contact form not found'
                });
            }

            res.status(200).json({
                success: true,
                message: 'Contact form updated successfully',
                data: contactForm
            });

        } catch (error) {
            console.error('❌ Error updating contact form:', error);

            if (error.name === 'ValidationError') {
                return res.status(400).json({
                    success: false,
                    message: 'Validation error',
                    errors: Object.keys(error.errors).map(key => ({
                        field: key,
                        message: error.errors[key].message
                    }))
                });
            }

            if (error.name === 'CastError') {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid contact form ID'
                });
            }

            res.status(500).json({
                success: false,
                message: 'Failed to update contact form',
                error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
            });
        }
    }

    /**
     * Delete a contact form submission
     * @route DELETE /api/contact/:id
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     */
    async deleteContactForm(req, res) {
        try {
            const { id } = req.params;

            const contactForm = await ContactForm.findByIdAndDelete(id);

            if (!contactForm) {
                return res.status(404).json({
                    success: false,
                    message: 'Contact form not found'
                });
            }

            res.status(200).json({
                success: true,
                message: 'Contact form deleted successfully',
                data: contactForm
            });

        } catch (error) {
            console.error('❌ Error deleting contact form:', error);

            if (error.name === 'CastError') {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid contact form ID'
                });
            }

            res.status(500).json({
                success: false,
                message: 'Failed to delete contact form',
                error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
            });
        }
    }

    /**
     * Get contact form statistics
     * @route GET /api/contact/stats
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     */
    async getContactFormStats(req, res) {
        try {
            const totalSubmissions = await ContactForm.countDocuments();
            const todaySubmissions = await ContactForm.countDocuments({
                createdAt: {
                    $gte: new Date(new Date().setHours(0, 0, 0, 0))
                }
            });

            const recentSubmissions = await ContactForm.find()
                .sort('-createdAt')
                .limit(5)
                .select('name email projectTitle createdAt');

            res.status(200).json({
                success: true,
                message: 'Statistics retrieved successfully',
                data: {
                    totalSubmissions,
                    todaySubmissions,
                    recentSubmissions
                }
            });

        } catch (error) {
            console.error('❌ Error fetching statistics:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve statistics',
                error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
            });
        }
    }
}

// Create and export controller instance
const contactFormController = new ContactFormController();

module.exports = contactFormController;
