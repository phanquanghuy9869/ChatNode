var userController = require('../src/controller/user-controller.js');
var userService = require('../src/service/user-service.js');
const userRepo = require('../src/repo/user-repo.js');

const IocContainer = function () {
    // this.map = {};
    this.register = function (dependency, fnc) {
        this[dependency] = fnc;
    }
  
    this.register('userRepo', () => (new userRepo()));
    this.register('userService', () => (new userService(this.userRepo())));
    this.register('userController', () => (new userController(this.userService())));
}

module.exports = new IocContainer();


//// Can't use it because it fucking create singleton all the time