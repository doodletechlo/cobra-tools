FORMAT: 1A

# Profile Service
User profile service

## Profile Routes [/api/profile/getuser]
### Retrieve Token [GET]
+ Request (application/json;charset=utf-8)

    + Headers

        token:
        NzdlNzJkMWQtZWNlZS00MDk1LTk2OGEtMGI0MGZlZjE0NjNl.R1pebh06jMfupcMaluWA6eCjqQ0GfiO9hRbYi+3oLIa2A0RUbooUojWo+XqhqGuMONjQaBBp4X41qjqk9Ueqzy4rr1jb8iH4f3kR++kCU5r6lXsPd2hSh8EtwFclXUyh1pBQAqPCvTdhe+7kVYMzqqYx9SX6b/TMc4KbnA8xtMX5dOSk9oT3vAvCwM3CRGruA9rme/VgRii/QDogLJlcImDu8V2ubXcwnNPtK/9wOMFGPXy1b9SxzD6vLVhUWP662s3sJfjNgM83+2jinqwg2iQMUHXWGStx5NC2WX4DtCLEI/4Cijs0Q16jACh9zGYUUIWoVGo7p/nEtehTD7U1pQ==

+ Response 200 (application/json;charset=utf-8)

        {
            username: "testuser",
            lastName: "Leon",
            firstName: "Steve",
            email: "testuser@dt.com",
            customerId: "0e5da78f-733c-4602-a9af-340b6a3e83ab"
        }


+ Response 401 (application/json)

        {
            {
                error: 'denied',
                description: 'Invalid credentials'
            }
        }

## Profile Routes [/api/profile/updatepassword]
### Retrieve Token [POST]
+ Request (application/json;charset=utf-8)

    + Headers

        token:
        NzdlNzJkMWQtZWNlZS00MDk1LTk2OGEtMGI0MGZlZjE0NjNl.R1pebh06jMfupcMaluWA6eCjqQ0GfiO9hRbYi+3oLIa2A0RUbooUojWo+XqhqGuMONjQaBBp4X41qjqk9Ueqzy4rr1jb8iH4f3kR++kCU5r6lXsPd2hSh8EtwFclXUyh1pBQAqPCvTdhe+7kVYMzqqYx9SX6b/TMc4KbnA8xtMX5dOSk9oT3vAvCwM3CRGruA9rme/VgRii/QDogLJlcImDu8V2ubXcwnNPtK/9wOMFGPXy1b9SxzD6vLVhUWP662s3sJfjNgM83+2jinqwg2iQMUHXWGStx5NC2WX4DtCLEI/4Cijs0Q16jACh9zGYUUIWoVGo7p/nEtehTD7U1pQ==

    + Body
       {
           oldPassword: "password",
           newPassword: "newpassword"
       }

+ Response 200 (application/json;charset=utf-8)

+ Response 401 (application/json)

        {
            {
                error: 'denied',
                description: 'Invalid credentials'
            }
        }

+ Response 401 (application/json)

        {
            {
                error: 'missingFields',
                description: 'Required fields: newPassword, oldPassword'
            }
        }

## Profile Routes [/api/profile/updateemail]
### Retrieve Token [POST]
+ Request (application/json;charset=utf-8)

    + Headers

        token:
        NzdlNzJkMWQtZWNlZS00MDk1LTk2OGEtMGI0MGZlZjE0NjNl.R1pebh06jMfupcMaluWA6eCjqQ0GfiO9hRbYi+3oLIa2A0RUbooUojWo+XqhqGuMONjQaBBp4X41qjqk9Ueqzy4rr1jb8iH4f3kR++kCU5r6lXsPd2hSh8EtwFclXUyh1pBQAqPCvTdhe+7kVYMzqqYx9SX6b/TMc4KbnA8xtMX5dOSk9oT3vAvCwM3CRGruA9rme/VgRii/QDogLJlcImDu8V2ubXcwnNPtK/9wOMFGPXy1b9SxzD6vLVhUWP662s3sJfjNgM83+2jinqwg2iQMUHXWGStx5NC2WX4DtCLEI/4Cijs0Q16jACh9zGYUUIWoVGo7p/nEtehTD7U1pQ==

    + Body
       {
           email: "test3@dt.com",
       }

+ Response 200 (application/json;charset=utf-8)

+ Response 401 (application/json)

        {
            {
                error: 'denied',
                description: 'Invalid credentials'
            }
        }

+ Response 401 (application/json)

        {
            {
                error: 'missingFields',
                description: 'Required fields: email'
            }
        }
