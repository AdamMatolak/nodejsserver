module.exports = function(app){
    var ownedCars = require('../controllers/controller');

    app.route('/cars')
        .get(ownedCars.list_all_cars)   
        .post(ownedCars.add_new_car);
    app.route('/cars/:carId')
        .get(ownedCars.read_a_car)
        .put(ownedCars.update_a_car)
        .delete(ownedCars.delete_a_car);
}