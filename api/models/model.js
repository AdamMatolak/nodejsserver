var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarsSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name and type of the car'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['new','used','crushed']
        }],
        default: ['new']
    }
});

module.exports = mongoose.model('Cars', CarsSchema);