module.exports = function (app) {

    let testController = require('../controller/testController')


    app.route('/test').get(testController.get)
}