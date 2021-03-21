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
        type: String,
        default: 'new'
    },
});

module.exports = mongoose.model('Cars', CarsSchema);