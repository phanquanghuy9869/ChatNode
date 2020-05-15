const userService = function(repo) {
    this._repo = repo;
    this.testProperty = null;

    this.createUser = function() {
        if (this.testProperty == null) {
            this.testProperty = 1;
            return 'init property!';
        } else {
            return 'property init before!';
        }
    } 
} 

module.exports = userService;