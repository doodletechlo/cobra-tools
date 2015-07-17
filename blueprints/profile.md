FORMAT: 1A

# Profile Service
User profile service

## Profile Routes [/api/profile/getuser]
### Retrieve Token [GET]
+ Request (application/json;charset=utf-8)

    + Headers

        NzdlNzJkMWQtZWNlZS00MDk1LTk2OGEtMGI0MGZlZjE0NjNl.R1pebh06jMfupcMaluWA6eCjqQ0GfiO9hRbYi+3oLIa2A0RUbooUojWo+XqhqGuMONjQaBBp4X41qjqk9Ueqzy4rr1jb8iH4f3kR++kCU5r6lXsPd2hSh8EtwFclXUyh1pBQAqPCvTdhe+7kVYMzqqYx9SX6b/TMc4KbnA8xtMX5dOSk9oT3vAvCwM3CRGruA9rme/VgRii/QDogLJlcImDu8V2ubXcwnNPtK/9wOMFGPXy1b9SxzD6vLVhUWP662s3sJfjNgM83+2jinqwg2iQMUHXWGStx5NC2WX4DtCLEI/4Cijs0Q16jACh9zGYUUIWoVGo7p/nEtehTD7U1pQ==

+ Response 200 (application/json;charset=utf-8)

        {
            username: "testuser",
            lastName: "Leon",
            firstName: "Steve",
            email: "testuser@dt.com",
        }


+ Response 401 (application/json)

        {
            {
                error: 'denied',
                description: 'Invalid credentials'
            }
        }
