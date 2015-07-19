var http = require('./common').httpService;

describe('login', function() {
    it('happy path', function(done) {
        var settings = {
            path: '/api/user/login',
            method: 'post',
            body: {
                username: 'testuser2',
                password: 'password'
            }
        }
        http(settings, function(err, results) {
            expect(err).toBeNull();
            expect(results).toBeDefined();
            expect(results.token).toBeDefined();
            done();

        });
    })
    it('invalid credentials', function(done) {
        var settings = {
            path: '/api/user/login',
            method: 'post',
            body: {
                username: 'testuser',
                password: 'password'
            }
        }
        http(settings, function(err, results) {
            expect(err).toBeDefined();
            expect(results.token).not.toBeDefined();
            done();

        });
    })
})
