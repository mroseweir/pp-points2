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

## getLogin

This is used for retreiving the login information of the admins, the url for calling it is as follows.

### `http://localhost:4500/api/login`

You should get data which contains

The admins id `res.data.accountId`
The admins username `res.data.username`
The admins password `res.data.password`
The admins account type `res.data.accountTypeId`
