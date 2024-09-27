const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    }
});

// Export the model correctly
module.exports = mongoose.model('details', userSchema);
