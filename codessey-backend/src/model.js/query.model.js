const mongoose = require('mongoose');

/**
 * Query Schema
 * @typedef {Object} Query
 * @property {string} name - Name of the person submitting the query
 * @property {string} email - Email address of the person
 * @property {string} phone - Phone number of the person
 * @property {string} query - The actual query/question submitted
 * @property {string} status - Status of the query (pending, in-progress, resolved, closed)
 * @property {string} priority - Priority level (low, medium, high, urgent)
 * @property {string} category - Category of the query
 * @property {string} assignedTo - Admin user assigned to handle this query
 * @property {string} response - Response/reply to the query
 * @property {Date} createdAt - Timestamp when the query was submitted
 * @property {Date} updatedAt - Timestamp when the query was last updated
 * @property {Date} resolvedAt - Timestamp when the query was resolved
 */

const querySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters long'],
            maxlength: [100, 'Name cannot exceed 100 characters']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please provide a valid email address'
            ]
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true,
            match: [
                /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
                'Please provide a valid phone number'
            ]
        },
        query: {
            type: String,
            required: [true, 'Query is required'],
            trim: true,
            minlength: [10, 'Query must be at least 10 characters long'],
            maxlength: [2000, 'Query cannot exceed 2000 characters']
        },
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'resolved', 'closed'],
            default: 'pending',
            lowercase: true
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high', 'urgent'],
            default: 'medium',
            lowercase: true
        },
        category: {
            type: String,
            trim: true,
            default: 'general'
        },
        assignedTo: {
            type: String,
            trim: true,
            default: null
        },
        response: {
            type: String,
            trim: true,
            default: null,
            maxlength: [5000, 'Response cannot exceed 5000 characters']
        },
        resolvedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true, // Automatically creates createdAt and updatedAt fields
        versionKey: false
    }
);

// Indexes for better query performance
querySchema.index({ email: 1 });
querySchema.index({ status: 1 });
querySchema.index({ priority: 1 });
querySchema.index({ createdAt: -1 });
querySchema.index({ category: 1 });

// Pre-save middleware to update resolvedAt when status changes to resolved
querySchema.pre('save', function(next) {
    if (this.isModified('status') && this.status === 'resolved' && !this.resolvedAt) {
        this.resolvedAt = new Date();
    }
    next();
});

// Instance method to mark query as resolved
querySchema.methods.markAsResolved = function(response) {
    this.status = 'resolved';
    this.response = response;
    this.resolvedAt = new Date();
    return this.save();
};

// Instance method to assign query to admin
querySchema.methods.assignTo = function(adminName) {
    this.assignedTo = adminName;
    this.status = 'in-progress';
    return this.save();
};

// Static method to get queries by status
querySchema.statics.getByStatus = function(status) {
    return this.find({ status }).sort({ createdAt: -1 });
};

// Static method to get queries by priority
querySchema.statics.getByPriority = function(priority) {
    return this.find({ priority }).sort({ createdAt: -1 });
};

// Static method to get pending queries
querySchema.statics.getPendingQueries = function() {
    return this.find({ status: 'pending' }).sort({ priority: -1, createdAt: -1 });
};

// Static method to get statistics
querySchema.statics.getStatistics = async function() {
    const stats = await this.aggregate([
        {
            $group: {
                _id: '$status',
                count: { $sum: 1 }
            }
        }
    ]);
    
    const total = await this.countDocuments();
    const pending = await this.countDocuments({ status: 'pending' });
    const inProgress = await this.countDocuments({ status: 'in-progress' });
    const resolved = await this.countDocuments({ status: 'resolved' });
    const closed = await this.countDocuments({ status: 'closed' });
    
    return {
        total,
        pending,
        inProgress,
        resolved,
        closed,
        breakdown: stats
    };
};

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
