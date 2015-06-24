FORMAT: 1A

# UI Profile Dev
The UIProfileService is a set of routes used to interact with a customers profile.

## Profile Routes [/api/profile]
### Retrieve account information [GET]
+ Request (application/json;charset=utf-8)

    + Header

            Authorization: bearer

+ Response 200 (application/json;charset=utf-8)

        {
            "customer": {
                "customerId": "41cea706314a44d880c38e09a8cf1a61",
                "accountId": "EXPN-141711755",
                "name": {
                    "first": "jorge",
                    "middle": null,
                    "last": "akkaya",
                    "suffix": null,
                    "title": null
                },
                "email": "mirza@experian.com",
                "currentAddress": {
                    "addressId": null,
                    "street": "123 brook st",
                    "line2": "3",
                    "city": "patchogue",
                    "state": "NY",
                    "zip": "11772"
                },
                "prevAddress": null,
                "phone": {
                    "area": "714",
                    "city": "830",
                    "number": "7000",
                    "ext": null,
                    "type": "Home"
                },
                "dob": "1939-01-06",
                "userName": "mbaig0306f",
                "securityQuestions": null,
                "motherMaidenName": null,
                "pin": "1234",
                "enrolledOn": "2015-03-06T18:29:14.077+00:00",
                "lastLogin": "2015-03-13T20:30:50.51+00:00"
            },
            "subscription": {
                "id": "076947d8-36b4-46f6-b1bf-31e5358ab097",
                "status": "A",
                "description": "Compare all 3 FICO<sup>&reg;</sup> Scores and Credit Reports from Experian, TransUnion<sup>&reg;</sup> and Equifax<sup>&reg;</sup>.",
                "name": "3 Bureau Credit Report and FICO Scores",
                "benefits": [
                    {
                        "id": "B7",
                        "name": "3B3S Report",
                        "description": "A 3B3S report description"
                    }
                ],
                "terms": [
                    {
                        "price": "49.95",
                        "frequency": "Single",
                        "startDate": -56712960000000,
                        "description": "Your credit card will be charged $49.95 once your identity has been confirmed and your report is ready to view. If, for any reason, we are unable to provide you with this report, we will not charge your credit card. <strong>Please note this transaction is non-refundable.</strong>",
                        "billingPeriod": "Immediate",
                        "tax": "0.00",
                        "total": "49.95"
                    }
                ]
            },
            "creditCard": {
                "type": "Visa",
                "cardNumber": "1111",
                "expMonth": "1",
                "expYear": "2018"
            }
        }


### Update an existing customer profile/account [POST]
+ Request (application/json;charset=utf-8)

    + Header

            Authorization: bearer

    + Body

            {
                "customer": {
                    "currentAddress": {
                        "street": "123 brook st",
                        "line2": "A5",
                        "city": "patchogue",
                        "state": "NY",
                        "zip": "11772"
                    }
                }
            }


+ Response 200


+ Response 400 (application/json)

        {
            "errors": [{
                "code": "Card_Error",
                "message": "Invalid credit card data",
                "errors": [{
                    "field": "newCreditCard.cardNumber",
                    "type": "string",
                    "detail": "Invalid Credit Card Data"
                }]
            }]
        }

