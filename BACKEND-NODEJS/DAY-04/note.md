nodemon
installation : npm install nodemon
change : "nodemon index.js"
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon index.js"
},
and run with : npm start

http methods : is a method for any action (CRUD) on data api.
get : read data
post : insert new data
put : makes change on data
delete : delete data

(req, res)

req : get parameter
res : response
There are 3 types of reques parameters:
1.res.query - This is an object containing

Homework
1.In exsitng product route
get all product - > already existing

- get product by id - > do it
- create product - > do it --> get from query paramerter
- update product - > do it
- delete product - > do it

req.query - url?var=sth&var=sth
req.params - url/value, url/:var
req.body - pass as an object in body - raw - json
