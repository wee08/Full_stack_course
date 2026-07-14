Route is a URL path that user use to find the data api ex: "/api/v1/user/"

- init project
  npm init -y
- install express
  npm install express

- route used for defines the url path
- controller used for handles code logic
- http://localhost:port

homework

1. create route students

- get all students
- get student by id
- create student
- update student
- delete student

2. create controller students

- get all students
- get studnet by id
- create student
- update student
- delete student

3. create data student

req.query : this is an object containing parameters pass in the query string
ex: url?var=sth

req.params : this is an object in Express that holds the values from dynamic segments in your route path — the parts you define with a colon (:).
ex: url/:id, url/12 -> id = 12

req.body : this is an object containing the data sent in the body of a request — typically used with POST, PUT, and PATCH requests, when the client is sending data to create or update something.
