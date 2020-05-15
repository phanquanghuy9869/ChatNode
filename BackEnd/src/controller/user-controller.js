const userController = function (service) {
    this._service = service;

    this.createUser = function (rq, rp) {
        const msg = this._service.createUser()
        rp.json({ message: 'Controller call service and get this respond: ' + msg });
    }
}

module.exports = userController;