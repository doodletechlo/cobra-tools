var http = require('./common').httpService;

var token = 'c70014f1-86d0-46f7-a6e7-6d7176be707a';

describe('getuser', function() {
    it('happy path', function(done) {
        var settings = {
            path: '/api/profile/getuser',
            headers: {
                token: token
            }
        }
        http(settings, function(err, results) {
            expect(err).toBeNull();
            expect(results).toBeDefined();
            expect(results.username).toBeDefined();
            expect(results.lastName).toBeDefined();
            expect(results.email).toBeDefined();
            expect(results.createDate).toBeDefined();
            expect(results.updateDate).toBeDefined();
            expect(results.customerId).toBeDefined();
            done();

        });
    })

    it('invalid credentials', function(done) {
        var settings = {
            path: '/api/profile/getuser',
            headers: {
                token: 'invalid token'
            }
        }
        http(settings, function(err, results) {
            expect(err).toBeDefined();
            done();
        });
    });
})

describe('updatepassword', function() {
    var settings = {};
    beforeEach(function() {
        settings = {
            path: '/api/profile/updatepassword',
            headers: {
                token: token
            },
            method: 'post',
            body: {
                'oldPassword': 'password',
                'newPassword': 'password1'
            }
        };
    })
    afterEach(function() {
        settings = {
            path: '/api/profile/updatepassword',
            headers: {
                token: token
            },
            method: 'post',
            body: {
                'oldPassword': 'password1',
                'newPassword': 'password'
            }
        };
        http(settings, function(err, results) {});
    });
    it('happy path', function(done) {
        http(settings, function(err, results) {
            expect(err).toBeNull();
            done();
        });
    })
    it('missing fields: oldpassword', function(done) {
        settings.body = {
            newPassword: 'password1'
        }
        http(settings, function(err, results) {
            expect(err).toBeDefined();
            expect(err.data.code).toEqual('missingFields');
            done();
        });
    })
    it('missing fields: newPassword', function(done) {
        settings.body = {
            oldPassword: 'password'
        }
        http(settings, function(err, results) {
            expect(err).toBeDefined();
            expect(err.data.code).toEqual('missingFields');
            done();
        });
    })
})

describe('updateemail', function() {
    var settings = {};
    beforeEach(function() {
        settings = {
            path: '/api/profile/updateemail',
            headers: {
                token: token
            },
            method: 'post',
            body: {
                'email': 'testuser@dt.com',
            }
        };
    })

    it('happy path', function(done) {
        http(settings, function(err, results) {
            expect(err).toBeNull();
            expect(results).toBeDefined();
            done();
        })
    })

    it('missing fields: email', function(done){
        settings.body = {
            'noemail': 'testuser@dt.com'
        }
        http(settings, function(err,results){
            expect(err).toBeDefined();
            expect(err.data.code).toBeDefined();
            expect(err.data.code).toEqual('missingFields');
            done();
        });
    })
})
