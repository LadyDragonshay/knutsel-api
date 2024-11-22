Microsoft Windows [Version 10.0.22631.4460]
(c) Microsoft Corporation. Alle rechten voorbehouden.

C:\BED_Final\BED-Final_Booking-Api-004 - kopie (2)>npm test

> express-bookings@1.0.0 test
> npm run test-positive && npm run test-negative


> express-bookings@1.0.0 test-positive
> newman run "./postman/collections/Bookings API.json" -e "./postman/environments/Local.postman_environment.json"

(node:2508) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
newman

Bookings API

□ users / {userId}
└ Get user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 67ms]
  GET http://0.0.0.0:3001/users/e5678901-23f0-1234-5678-9abcdef01234 [200 OK, 475B, 29ms]
  √  Response status code is 200
  √  Id should be a non-empty string

└ Update user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 8ms]
  PUT http://0.0.0.0:3001/users/e5678901-23f0-1234-5678-9abcdef01234 [200 OK, 319B, 21ms]
  √  Response status code is 200

└ Delete user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/users/e5678901-23f0-1234-5678-9abcdef01234 [200 OK, 366B, 16ms]
  √  Response status code is 200

□ users
└ Get all users
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/users [200 OK, 1.17kB, 8ms]
  √  Response status code is 200
  √  Response is an array

└ Create a new user
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  POST http://0.0.0.0:3001/users [201 Created, 644B, 18ms]
  √  Response status code is 201

□ hosts / {hostId}
└ Get host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  GET http://0.0.0.0:3001/hosts/e2345678-90bc-def0-0123-456789abcdef [200 OK, 575B, 6ms]
  √  Response status code is 200
  √  ID is a non-empty string

└ Update host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  PUT http://0.0.0.0:3001/hosts/e2345678-90bc-def0-0123-456789abcdef [200 OK, 319B, 17ms]
  √  Response status code is 200

└ Delete host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/hosts/e2345678-90bc-def0-0123-456789abcdef [200 OK, 619B, 18ms]
  √  Response status code is 200

□ hosts
└ Get all hosts
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  GET http://0.0.0.0:3001/hosts [200 OK, 1.59kB, 7ms]
  √  Response status code is 200
  √  Response body is an array

└ Create a new host
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  POST http://0.0.0.0:3001/hosts [201 Created, 655B, 17ms]
  √  Response status code is 201

□ properties / {propertyId}
└ Get property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/properties/i1234567-89f0-1234-5678-9abcdef01234 [200 OK, 564B, 7ms]
  √  Response status code is 200
  √  Id should be a non-empty string

└ Update property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/properties/i1234567-89f0-1234-5678-9abcdef01234 [200 OK, 555B, 34ms]
  √  Response status code is 200

└ Delete property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 3ms]
  DELETE http://0.0.0.0:3001/properties/i1234567-89f0-1234-5678-9abcdef01234 [200 OK, 655B, 12ms]
  √  Response status code is 200

□ properties
└ Get all properties
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  GET http://0.0.0.0:3001/properties [200 OK, 1.24kB, 8ms]
  √  Response status code is 200
  √  Response is an array with at least one element
  √  maxGuestCount is a non-negative integer

└ Create a new property
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  POST http://0.0.0.0:3001/properties [201 Created, 299B, 13ms]
  √  Response status code is 201

□ amenities / {amenityId}
└ Get amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/amenities/u3456789-01rs-tuvw-01cd-ef0123456789 [200 OK, 302B, 8ms]
  √  Response status code is 200
  √  Response has the required fields - id and name
  √  id is a non-empty string
  √  Name should be a non-empty string

└ Update amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  PUT http://0.0.0.0:3001/amenities/u3456789-01rs-tuvw-01cd-ef0123456789 [200 OK, 322B, 12ms]
  √  Response status code is 200

└ Delete amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/amenities/u3456789-01rs-tuvw-01cd-ef0123456789 [200 OK, 322B, 14ms]
  √  Response status code is 200

□ amenities
└ Get all amenities
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/amenities [200 OK, 796B, 9ms]
  √  Response status code is 200
  √  Response is an array with at least one element
  √  Each element in the response has the required fields - id and name
  √  The id must be a non-empty string
  √  Name is a non-empty string

└ Create a new amenity
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  POST http://0.0.0.0:3001/amenities [201 Created, 356B, 13ms]
  √  Response status code is 201

□ bookings / {bookingId}
└ Get booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  GET http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [200 OK, 532B, 9ms]
  √  Response status code is 200
  √  Id should be a non-empty string
  √  userId is a non-empty string
  √  propertyId should be a non-empty string

└ Update booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [200 OK, 322B, 18ms]
  √  Response status code is 200

└ Delete booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [200 OK, 322B, 13ms]
  √  Response status code is 200

□ bookings
└ Get all bookings
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/bookings [200 OK, 529B, 9ms]
  √  Response status code is 200
  √  Response is an array
  √  Id should be a non-empty string
  √  userId is a non-empty string

└ Create a new booking
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/bookings [201 Created, 590B, 13ms]
  √  Response status code is 201

□ reviews / {reviewId}
└ Get review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [200 OK, 477B, 10ms]
  √  Response status code is 200
  √  Response has the required fields
  √  Id is a non-empty string
  √  userId is a non-empty string
  √  propertyId is a non-empty string

└ Update review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [200 OK, 437B, 23ms]
  √  Response status code is 200

└ Delete review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [200 OK, 534B, 13ms]
  √  Response status code is 200

□ reviews
└ Get all reviews
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/reviews [200 OK, 898B, 19ms]
  √  Response status code is 200
  √  Response is an array with at least one element
  √  Id is a non-empty string
  √  userId is a non-empty string
  √  propertyId is a non-empty string

└ Create a new review
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  POST http://0.0.0.0:3001/reviews [201 Created, 295B, 8ms]
  √  Response status code is 201

→ User Login
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  √  Response status code is 200
  √  Response has the required field 'token'
  √  Token is a non-empty string

┌─────────────────────────┬──────────────────┬─────────────────┐
│                         │         executed │          failed │
├─────────────────────────┼──────────────────┼─────────────────┤
│              iterations │                1 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│                requests │               62 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│            test-scripts │               62 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│      prerequest-scripts │               31 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│              assertions │               61 │               0 │
├─────────────────────────┴──────────────────┴─────────────────┤
│ total run duration: 3s                                       │
├──────────────────────────────────────────────────────────────┤
│ total data received: 16.89kB (approx)                        │
├──────────────────────────────────────────────────────────────┤
│ average response time: 10ms [min: 3ms, max: 67ms, s.d.: 9ms] │
└──────────────────────────────────────────────────────────────┘

> express-bookings@1.0.0 test-negative
> newman run "./postman/collections/Bookings API Negative.json" -e "./postman/environments/Local.postman_environment.json"

(node:16572) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
newman

Bookings API Negative

□ users / {userId}
└ Get user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 43ms]
  GET http://0.0.0.0:3001/users/:userId [404 Not Found, 290B, 12ms]
  √  Response status code is 404

└ Update user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  PUT http://0.0.0.0:3001/users/d4567890-12 [404 Not Found, 290B, 18ms]
  √  Response status code is 404

└ Delete user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/users/d4567890-12ef-01 [404 Not Found, 295B, 11ms]
  √  Response status code is 404

□ users
└ Create a new user
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  POST http://0.0.0.0:3001/users [400 Bad Request, 277B, 14ms]
  √  Response status code is 400

□ hosts / {hostId}
└ Get host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 7ms]
  GET http://0.0.0.0:3001/hosts/:hostId [404 Not Found, 290B, 6ms]
  √  Response status code is 404

└ Update host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/hosts/:hostId [404 Not Found, 286B, 18ms]
  √  Response status code is 404

└ Delete host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/hosts/:hostId [404 Not Found, 286B, 16ms]
  √  Response status code is 404

□ hosts
└ Create a new host
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/hosts [400 Bad Request, 281B, 5ms]
  √  Response status code is 400

□ properties / {propertyId}
└ Get property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/properties/h0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 319B, 5ms]
  √  Response status code is 404

└ Update property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/properties/h0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 244B, 18ms]
  √  Response status code is 404

└ Delete property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  DELETE http://0.0.0.0:3001/properties/h0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 319B, 10ms]
  √  Response status code is 404

□ properties
└ Create a new property
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/properties [400 Bad Request, 387B, 5ms]
  √  Response status code is 400

□ amenities / {amenityId}
└ Get amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  GET http://0.0.0.0:3001/amenities/t2345678-90qr-stu [404 Not Found, 303B, 9ms]
  √  Response status code is 404

└ Update amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  PUT http://0.0.0.0:3001/amenities/t2345678-90qr-st [404 Not Found, 302B, 9ms]
  √  Response status code is 404

└ Delete amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/amenities/bc-def012345678 [404 Not Found, 301B, 9ms]
  √  Response status code is 404

□ amenities
└ Create a new amenity
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/amenities [400 Bad Request, 287B, 5ms]
  √  Response status code is 400

□ bookings / {bookingId}
└ Get booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  GET http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [404 Not Found, 322B, 9ms]
  √  Response status code is 404

└ Update booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [404 Not Found, 322B, 18ms]
  √  Response status code is 404

└ Delete booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [404 Not Found, 322B, 9ms]
  √  Response status code is 404

□ bookings
└ Create a new booking
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  POST http://0.0.0.0:3001/bookings [400 Bad Request, 372B, 5ms]
  √  Response status code is 400

□ reviews / {reviewId}
└ Get review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 317B, 6ms]
  √  Response status code is 404

└ Update review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  PUT http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 244B, 16ms]
  √  Response status code is 404

└ Delete review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  DELETE http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 317B, 9ms]
  √  Response status code is 404

□ reviews
└ Create a new review
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/reviews [400 Bad Request, 318B, 5ms]
  √  Response status code is 400

→ User Login
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/login [401 Unauthorized, 279B, 3ms]
  √  Response status code is 401

┌─────────────────────────┬─────────────────┬─────────────────┐
│                         │        executed │          failed │
├─────────────────────────┼─────────────────┼─────────────────┤
│              iterations │               1 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│                requests │              50 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│            test-scripts │              50 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│      prerequest-scripts │              25 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│              assertions │              25 │               0 │
├─────────────────────────┴─────────────────┴─────────────────┤
│ total run duration: 2.4s                                    │
├─────────────────────────────────────────────────────────────┤
│ total data received: 6.93kB (approx)                        │
├─────────────────────────────────────────────────────────────┤
│ average response time: 8ms [min: 3ms, max: 43ms, s.d.: 6ms] │
└─────────────────────────────────────────────────────────────┘

C:\BED_Final\BED-Final_Booking-Api-004 - kopie (2)>
