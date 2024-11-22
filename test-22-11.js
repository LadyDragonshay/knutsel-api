Microsoft Windows [Version 10.0.22631.4460]
(c) Microsoft Corporation. Alle rechten voorbehouden.

C:\BED_Final\BED-Final_Booking-Api-007-basis>npm run dev

> express-bookings@1.0.0 dev
> nodemon src/index.js

[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
(node:23964) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3001
info: POST /login. Status: 200. Duration: 7 ms {"service":"bookstore-api"}
GET /users/e5678901-23f0-1234-5678-9abcdef01234 { params: {}, query: {}, body: undefined }
info: GET /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /users/e5678901-23f0-1234-5678-9abcdef01234 {
  params: {},
  query: {},
  body: {
    username: 'jdoe_updated',
    name: 'John Doe Updated',
    email: 'updatedjohndoe@example.com',
    phoneNumber: '987-654-3210',
    profilePicture: 'https://updated-example.com/images/johndoe.jpg',
    password: '***'
  }
}
info: PUT /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /users/e5678901-23f0-1234-5678-9abcdef01234 { params: {}, query: {}, body: undefined }
deleteUser: Function called with id: e5678901-23f0-1234-5678-9abcdef01234
Attempting to delete user with id: e5678901-23f0-1234-5678-9abcdef01234
info: DELETE /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
Delete result: { count: 1 }
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /users/ { params: {}, query: {}, body: undefined }
info: GET /users. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
POST /users/ {
  params: {},
  query: {},
  body: {
    username: 'Alex',
    password: '***',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    profilePicture: 'https://global-uploads.webflow.com/5eecfecbe625d195e35b89f2/624bfb093da7d92733c001c0_Ignacio%20Villafruela%20Rodr%C3%ADguez.jpg'
  }
}
info: POST /users. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /hosts/e2345678-90bc-def0-0123-456789abcdef
info: GET /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
PUT /hosts/e2345678-90bc-def0-0123-456789abcdef
info: PUT /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
DELETE /hosts/e2345678-90bc-def0-0123-456789abcdef
info: DELETE /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /hosts
info: GET /hosts. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
POST /hosts
info: POST /hosts. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /properties/i1234567-89f0-1234-5678-9abcdef01234
info: GET /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
PUT /properties/i1234567-89f0-1234-5678-9abcdef01234
info: PUT /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
DELETE /properties/i1234567-89f0-1234-5678-9abcdef01234
info: DELETE /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /properties
info: GET /properties. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
POST /properties
info: POST /properties. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /amenities/u3456789-01rs-tuvw-01cd-ef0123456789
info: GET /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
PUT /amenities/u3456789-01rs-tuvw-01cd-ef0123456789
info: PUT /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /amenities/u3456789-01rs-tuvw-01cd-ef0123456789
info: DELETE /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /amenities
info: GET /amenities. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
POST /amenities
info: POST /amenities. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /bookings/f0123456-78ab-cdef-0123-456789abcdef
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /bookings
info: GET /bookings. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
POST /bookings
info: POST /bookings. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /reviews/j0123456-78f0-1234-5678-9abcdef01234
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /reviews
info: GET /reviews. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
POST /reviews
info: POST /reviews. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
(node:39880) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3001
