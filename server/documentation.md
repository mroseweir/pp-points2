# Student API Documentation

## getPoints

This is used for retreiving the entire points data base, the url for calling it is as follows.

### `http://localhost:4500/api/points`

You should get data which contains

The students id `res.data.id`
The students name `res.data.name`
The students point count `res.data.points`
The students cohort `res.data.cohort`
The students specialization `res.data.specialization`
If the student passed milestone1 `res.data.milestone1`
If the student passed milestone2 `res.data.milestone2`
If the student passed milestone3 `res.data.milestone3`

## getLogin

This is used for retreiving the login information of the admins, the url for calling it is as follows.

### `http://localhost:4500/api/login`

You should get data which contains

The admins id `res.data.accountId`
The admins username `res.data.username`
The admins password `res.data.password`
The admins account type `res.data.accountTypeId`

## postStudents

This is used for adding student data to the Student database, you should send the content to this endpoint.

### `http:localhost:4500/api/points`

The data you should send is `name, cohort, specialization.` the server will return the data from the Student database.

## deleteStudent

This is used for deleteing points in the Student Database. To access this call use the endPoint.

### `http:localhost:4500/api/points:id`

You should pass in the id of the student you want to delete in the :id parameter, the API will send back the Student Database.

## updatePoints

This is used for updating points in the student database. You can access the call with this endpoint

### `http://localhost:4500/api/points:id`

In the body you can pass in three types of update `plus1, plus5, and minus1` These do as they describe. as well in the :id parameter you will need to pass in the students id you wish to update the points on.
