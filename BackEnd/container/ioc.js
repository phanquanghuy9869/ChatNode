// const userController = require('../src/controller/user-controller.js');
// const userService = require('../src/service/user-service.js');
// const userRepo = require('../src/repo/user-repo.js');
// const dbContext = require('../src/database/mongo-db.js');

// const IocContainer = function () {
//     // this.map = {};
//     this.register = function (dependency, fnc) {
//         this[dependency] = fnc;
//     }
//     const config = {
//         database: 'chatnode',
//         server: 'mongodb://localhost:27017'
//     };

//     this.register('dbContext', () => (new dbContext(config)));
//     this.register('userRepo', () => (new userRepo()));
//     this.register('userService', () => (new userService(this.userRepo())));
//     this.register('userController', () => (new userController(this.userService())));
// }

// module.exports = new IocContainer();


// //// Can't use it because it fucking create singleton all the time