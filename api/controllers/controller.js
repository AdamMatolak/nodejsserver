var mongoose = require('mongoose'),
Car = mongoose.model('Cars');

exports.list_all_cars = function(req, res){
    Car.find({}, function(err, car){
        if(err){
            res.send(err);
        }
        res.json(car);
    });
};

exports.add_new_car = function(req, res){
    var new_car = new Car(req.body);
    new_car.save(function(err, car){
        if(err){
            res.send(err);
        }
        res.json(car);
    });
};

exports.read_a_car = function(req, res){
    Car.findById(req.params.carId, function(err, car){
        if(err){
            res.send(err);
        }
        res.json(car);
    });
};

exports.update_a_car = function(req, res){
    Car.findByIdAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, car){
        if(err){
            res.send(err);
        }
        res.json(car);
    })
}

exports.delete_a_car = function(req, res){
    Car.remove({
        _id: req.params.taskId
    }, function(err, car){
        if(err){
            res.send(err);
        }
        res.json({message: 'Car successfully deleted' });
    });
    
};