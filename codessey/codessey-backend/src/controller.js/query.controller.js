const Query = require('../model.js/query.model');
const emailService = require('../utils/emailService');

/**
 * Query Controller
 * Handles all CRUD operations for query submissions
 */
class QueryController {
    /**
     * Create a new query submission
     * @route POST /api/queries
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     */
    async createQuery(req, res) {
        try {
            const { name, email, phone, query, priority, category } = req.body;

            // Validate required fields
            if (!name || !email || !phone || !query) {
                return res.status(400).json({
                    success: false,
                    message: 'All required fields must be provided',
                    missingFields: {
                        name: !name,
                        email: !email,
                        phone: !phone,
                        query: !query
                    }
                });
            }

            // Create new query entry
            const newQuery = new Query({
                name,
                email,
                phone,
                query,
                priority: priority || 'medium',
                category: category || 'general',
                status: 'pending'
            });

            await newQuery.save();

            // Send email notification to admin
            try {
                await emailService.sendEmail({
                    to: process.env.ADMIN_EMAIL || 'campaignwalatech@gmail.com',
                    subject: `New Query Received - ${priority || 'medium'} Priority`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
                                🔔 New Query Submission
                            </h2>
                            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                                <p><strong>Query ID:</strong> ${newQuery._id}</p>
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Email:</strong> ${email}</p>
                                <p><strong>Phone:</strong> ${phone}</p>
                                <p><strong>Category:</strong> ${category || 'general'}</p>
                                <p><strong>Priority:</strong> <span style="color: ${priority === 'urgent' ? 'red' : priority === 'high' ? 'orange' : 'green'}; font-weight: bold;">${priority || 'medium'}</span></p>
                                <p><strong>Status:</strong> Pending</p>
                            </div>
                            <div style="margin: 20px 0;">
                                <h3 style="color: #333;">Query Details:</h3>
                                <p style="background-color: #fff; padding: 15px; border-left: 4px solid #4CAF50; border-radius: 3px;">
                                    ${query}
                                </p>
                            </div>
                            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                                <p>Submitted on: ${new Date().toLocaleString()}</p>
                                <p>This is an automated notification from Codessey Query System.</p>
                            </div>
                        </div>
                    `
                });
            } catch (emailError) {
                console.error('❌ Failed to send email notification:', emailError.message);
                // Continue even if email fails
            }

            // Send confirmation email to user
            try {
                await emailService.sendEmail({
                    to: email,
                    subject: 'Query Received - We\'ll Get Back to You Soon',
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
                                ✅ Query Received Successfully
                            </h2>
                            <p>Dear ${name},</p>
                            <p>Thank you for reaching out to us. We have received your query and our team will get back to you shortly.</p>
                            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                                <p><strong>Query ID:</strong> ${newQuery._id}</p>
                                <p><strong>Status:</strong> Pending</p>
                                <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
                            </div>
                            <div style="margin: 20px 0;">
                                <h3 style="color: #333;">Your Query:</h3>
                                <p style="background-color: #fff; padding: 15px; border-left: 4px solid #4CAF50; border-radius: 3px;">
                                    ${query}
                                </p>
                            </div>
                            <p>We typically respond within 24-48 hours. If your query is urgent, please feel free to call us.</p>
                            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                                <p>Best regards,<br>Codessey Support Team</p>
                            </div>
                        </div>
                    `
                });
            } catch (emailError) {
                console.error('❌ Failed to send confirmation email:', emailError.message);
            }

            return res.status(201).json({
                success: true,
                message: 'Query submitted successfully',
                data: newQuery
            });

        } catch (error) {
            console.error('❌ Error creating query:', error);
            
            if (error.name === 'ValidationError') {
                return res.status(400).json({
                    success: false,
                    message: 'Validation error',
                    errors: Object.values(error.errors).map(err => err.message)
                });
            }

            return res.status(500).json({
                success: false,
                message: 'Failed to submit query',
                error: error.message
            });
        }
    }

    /**
     * Get all queries with pagination and filtering
     * @route GET /api/queries
     */
    async getAllQueries(req, res) {
        try {
            const {
                page = 1,
                limit = 10,
                status,
                priority,
                category,
                sortBy = 'createdAt',
                order = 'desc',
                search
            } = req.query;

            const query = {};

            // Apply filters
            if (status) query.status = status;
            if (priority) query.priority = priority;
            if (category) query.category = category;
            
            // Search functionality
            if (search) {
                query.$or = [
                    { name: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                    { phone: { $regex: search, $options: 'i' } },
                    { query: { $regex: search, $options: 'i' } }
                ];
            }

            const options = {
                page: parseInt(page),
                limit: parseInt(limit),
                sort: { [sortBy]: order === 'desc' ? -1 : 1 }
            };

            const skip = (options.page - 1) * options.limit;

            const queries = await Query.find(query)
                .sort(options.sort)
                .skip(skip)
                .limit(options.limit);

            const total = await Query.countDocuments(query);

            return res.status(200).json({
                success: true,
                message: 'Queries fetched successfully',
                data: queries,
                pagination: {
                    currentPage: options.page,
                    totalPages: Math.ceil(total / options.limit),
                    totalQueries: total,
                    queriesPerPage: options.limit,
                    hasNextPage: options.page < Math.ceil(total / options.limit),
                    hasPrevPage: options.page > 1
                }
            });

        } catch (error) {
            console.error('❌ Error fetching queries:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to fetch queries',
                error: error.message
            });
        }
    }

    /**
     * Get query by ID
     * @route GET /api/queries/:id
     */
    async getQueryById(req, res) {
        try {
            const { id } = req.params;

            const query = await Query.findById(id);

            if (!query) {
                return res.status(404).json({
                    success: false,
                    message: 'Query not found'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Query fetched successfully',
                data: query
            });

        } catch (error) {
            console.error('❌ Error fetching query:', error);
            
            if (error.kind === 'ObjectId') {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid query ID format'
                });
            }

            return res.status(500).json({
                success: false,
                message: 'Failed to fetch query',
                error: error.message
            });
        }
    }

    /**
     * Update query
     * @route PUT /api/queries/:id
     */
    async updateQuery(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;

            // Check if status is being changed to resolved
            if (updateData.status === 'resolved' && !updateData.resolvedAt) {
                updateData.resolvedAt = new Date();
            }

            const query = await Query.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );

            if (!query) {
                return res.status(404).json({
                    success: false,
                    message: 'Query not found'
                });
            }

            // Send email notification if status changed to resolved
            if (updateData.status === 'resolved' && updateData.response) {
                try {
                    await emailService.sendEmail({
                        to: query.email,
                        subject: 'Your Query Has Been Resolved',
                        html: `
                            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                                <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
                                    ✅ Query Resolved
                                </h2>
                                <p>Dear ${query.name},</p>
                                <p>Your query has been resolved. Here's the response from our team:</p>
                                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                                    <p><strong>Query ID:</strong> ${query._id}</p>
                                    <p><strong>Status:</strong> Resolved</p>
                                    <p><strong>Resolved on:</strong> ${new Date().toLocaleString()}</p>
                                </div>
                                <div style="margin: 20px 0;">
                                    <h3 style="color: #333;">Your Query:</h3>
                                    <p style="background-color: #fff; padding: 15px; border-left: 4px solid #ddd; border-radius: 3px;">
                                        ${query.query}
                                    </p>
                                </div>
                                <div style="margin: 20px 0;">
                                    <h3 style="color: #333;">Our Response:</h3>
                                    <p style="background-color: #fff; padding: 15px; border-left: 4px solid #4CAF50; border-radius: 3px;">
                                        ${updateData.response}
                                    </p>
                                </div>
                                <p>If you have any further questions, please feel free to submit a new query.</p>
                                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                                    <p>Best regards,<br>Codessey Support Team</p>
                                </div>
                            </div>
                        `
                    });
                } catch (emailError) {
                    console.error('❌ Failed to send resolution email:', emailError.message);
                }
            }

            return res.status(200).json({
                success: true,
                message: 'Query updated successfully',
                data: query
            });

        } catch (error) {
            console.error('❌ Error updating query:', error);
            
            if (error.name === 'ValidationError') {
                return res.status(400).json({
                    success: false,
                    message: 'Validation error',
                    errors: Object.values(error.errors).map(err => err.message)
                });
            }

            if (error.kind === 'ObjectId') {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid query ID format'
                });
            }

            return res.status(500).json({
                success: false,
                message: 'Failed to update query',
                error: error.message
            });
        }
    }

    /**
     * Update query status
     * @route PATCH /api/queries/:id/status
     */
    async updateQueryStatus(req, res) {
        try {
            const { id } = req.params;
            const { status, response } = req.body;

            if (!status) {
                return res.status(400).json({
                    success: false,
                    message: 'Status is required'
                });
            }

            const updateData = { status };
            if (status === 'resolved') {
                updateData.resolvedAt = new Date();
                if (response) updateData.response = response;
            }

            const query = await Query.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );

            if (!query) {
                return res.status(404).json({
                    success: false,
                    message: 'Query not found'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Query status updated successfully',
                data: query
            });

        } catch (error) {
            console.error('❌ Error updating query status:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to update query status',
                error: error.message
            });
        }
    }

    /**
     * Assign query to admin
     * @route PATCH /api/queries/:id/assign
     */
    async assignQuery(req, res) {
        try {
            const { id } = req.params;
            const { assignedTo } = req.body;

            if (!assignedTo) {
                return res.status(400).json({
                    success: false,
                    message: 'assignedTo field is required'
                });
            }

            const query = await Query.findByIdAndUpdate(
                id,
                { 
                    assignedTo,
                    status: 'in-progress'
                },
                { new: true, runValidators: true }
            );

            if (!query) {
                return res.status(404).json({
                    success: false,
                    message: 'Query not found'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Query assigned successfully',
                data: query
            });

        } catch (error) {
            console.error('❌ Error assigning query:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to assign query',
                error: error.message
            });
        }
    }

    /**
     * Delete query
     * @route DELETE /api/queries/:id
     */
    async deleteQuery(req, res) {
        try {
            const { id } = req.params;

            const query = await Query.findByIdAndDelete(id);

            if (!query) {
                return res.status(404).json({
                    success: false,
                    message: 'Query not found'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Query deleted successfully',
                data: query
            });

        } catch (error) {
            console.error('❌ Error deleting query:', error);
            
            if (error.kind === 'ObjectId') {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid query ID format'
                });
            }

            return res.status(500).json({
                success: false,
                message: 'Failed to delete query',
                error: error.message
            });
        }
    }

    /**
     * Get query statistics
     * @route GET /api/queries/stats
     */
    async getQueryStatistics(req, res) {
        try {
            const stats = await Query.getStatistics();

            // Get queries by priority
            const priorityStats = await Query.aggregate([
                {
                    $group: {
                        _id: '$priority',
                        count: { $sum: 1 }
                    }
                }
            ]);

            // Get queries by category
            const categoryStats = await Query.aggregate([
                {
                    $group: {
                        _id: '$category',
                        count: { $sum: 1 }
                    }
                }
            ]);

            // Get recent queries (last 7 days)
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            const recentQueries = await Query.countDocuments({
                createdAt: { $gte: sevenDaysAgo }
            });

            // Average resolution time
            const resolvedQueries = await Query.find({ 
                status: 'resolved',
                resolvedAt: { $ne: null }
            }).select('createdAt resolvedAt');

            let avgResolutionTime = 0;
            if (resolvedQueries.length > 0) {
                const totalTime = resolvedQueries.reduce((sum, query) => {
                    return sum + (query.resolvedAt - query.createdAt);
                }, 0);
                avgResolutionTime = Math.round(totalTime / resolvedQueries.length / (1000 * 60 * 60)); // in hours
            }

            return res.status(200).json({
                success: true,
                message: 'Statistics fetched successfully',
                data: {
                    overview: stats,
                    byPriority: priorityStats,
                    byCategory: categoryStats,
                    recentQueries: recentQueries,
                    averageResolutionTimeHours: avgResolutionTime
                }
            });

        } catch (error) {
            console.error('❌ Error fetching statistics:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to fetch statistics',
                error: error.message
            });
        }
    }

    /**
     * Get pending queries
     * @route GET /api/queries/pending
     */
    async getPendingQueries(req, res) {
        try {
            const queries = await Query.getPendingQueries();

            return res.status(200).json({
                success: true,
                message: 'Pending queries fetched successfully',
                data: queries,
                count: queries.length
            });

        } catch (error) {
            console.error('❌ Error fetching pending queries:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to fetch pending queries',
                error: error.message
            });
        }
    }

    /**
     * Bulk delete queries
     * @route DELETE /api/queries/bulk
     */
    async bulkDeleteQueries(req, res) {
        try {
            const { ids } = req.body;

            if (!ids || !Array.isArray(ids) || ids.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Please provide an array of query IDs'
                });
            }

            const result = await Query.deleteMany({ _id: { $in: ids } });

            return res.status(200).json({
                success: true,
                message: 'Queries deleted successfully',
                deletedCount: result.deletedCount
            });

        } catch (error) {
            console.error('❌ Error bulk deleting queries:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to delete queries',
                error: error.message
            });
        }
    }
}

module.exports = new QueryController();
