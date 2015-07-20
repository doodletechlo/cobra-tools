var http = require('./common').httpService;

ddescribe('create', function() {
    var settings = {};

    beforeEach(function() {
        var rand = new Date().valueOf();
        settings = {
            path: '/api/registration/create',
            method: 'post',
            body: {
                username: 'testuser' + rand,
                password: 'password',
                email: 'testuser' + rand + '@dt.com',
                firstName: 'steve',
                lastName: 'leon'
            }
        };
    });

    it('happy path', function(done) {
        http(settings, function(err, results) {
            expect(err).toBeNull();
            expect(results).toBeDefined();
            expect(results.token).toBeDefined();
            done();
        });
    });

    it('missingFields', function(done){
        settings.body = {
               username: 'testuser',
               password: 'password',
               email: 'testuser2@dt.com',
               firstName: 'steve'
        };
        http(settings, function(err, results){
            expect(err).toBeDefined();
            expect(results.code).toBeDefined();
            expect(results.code).toEqual('missingFields');
            done();
        });
    });

    it('email is taken', function(done){
        settings.body.email= 'testuser@dt.com';

        http(settings, function(err, results){
            expect(err).toBeDefined();
            expect(results.code).toBeDefined();
            expect(results.code).toEqual('emailTaken');
            done();
        });
    });

    it('username is taken', function(done){
        settings.body.username = 'testuser2';

        http(settings, function(err, results){
            expect(err).toBeDefined();
            expect(results.code).toBeDefined();
            expect(results.code).toEqual('usernameTaken');
            done();
        });
    });
});
