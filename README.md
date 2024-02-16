# RBAC-with-JWT-and-in-NodeJS-and-mongoDB

CRUD APIs to demonstrate RBAC (role based access control) implemented with JWT in Node.js and using MongoDB

# Overview

The Project has implementation of

- Authentication
- Validation
- Authorization
- Role based access controls for CRUD APIs

# Setup and Usage

Simply clone the repository and enter the below commands <br/>
To install dependency use `npm install` <br/>
To start server use `npm start`<br/>
<br/>

## To Run this Project via NPM follow below:

```bash

```

npm init

npm install express mongoose bcryptjs jsonwebtoken dotenv body-parser config joi lodash

npm install --save-dev nodemon

//I missed importing env file.

---

https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported

require('dotenv').config({ path: 'ENV_FILENAME' });

OR

## To read from .env file you have to install dotenv ( npm i dotenv / yarn add dotenv) and then just add this on top of your file.

const dotenv = require("dotenv");

dotenv.config();

```
npm install
npm run dev

npm audit fix --force

npx npkill  -- delete node_modules folder

npx kill-port --port 8080,5000,3000      --- Kill multiple ports
```

# Models

[`User`](https://github.com/Vishnuvarthangs/NodeJs/tree/RBAC_JWT_API_CRUD/models/user.js) Model is kept for Authentication, Authorization and Validation purpose.<br/>
[`Post`](https://github.com/Vishnuvarthangs/NodeJs/tree/RBAC_JWT_API_CRUD/models/posts.js) Model for CRUD APIs

# API Flows

Import this [`Postman collection`](https://github.com/Vishnuvarthangs/NodeJs/blob/RBAC_JWT_API_CRUD/PostMan_Endpoints/AttainU.postman_collection.json) to view all important APIs.<br/>
`api/auth/login` and `api/auth/signup` are public endpoints.<br/>
Rest all other CRUD endpoints can only be accessed via proving that a user is authenticated as well as authorized.

- Normal User is allowed only to retrieve the Posts in MongoDB in paginated way (if they wish to), so as to handle huge no. of posts.
- Admin can perform all CRUD operations on Posts document in mongoDB.
  When server is started Admin user is created by default if User collection is empty. Credentials for Admin user is as follows
  _ Name : `admin`
  _ email : `admin@admin.com` \* password : `admin`

#### NOTE : All CRUD APIs require JWT authentication.

# Folder overview

[`validator`](https://github.com/Vishnuvarthangs/NodeJs/tree/RBAC_JWT_API_CRUD/validator) : Has all necessary logic to validate the User Model fields.<br/>
[`routes`](https://github.com/Vishnuvarthangs/NodeJs/tree/RBAC_JWT_API_CRUD/routes) : Has all API endpoints and defines what middlewares should be used for a particular endpoint.<br/>
[`model`](https://github.com/Vishnuvarthangs/NodeJs/tree/RBAC_JWT_API_CRUD/models) : Has DB schema that is followed for collections throughout the project.<br/>
[`middleware`](https://github.com/Vishnuvarthangs/NodeJs/tree/RBAC_JWT_API_CRUD/middleware) : Has necessary logic to check authourization and access level of a particular user.<br/>
[`controller`](https://github.com/Vishnuvarthangs/NodeJs/tree/RBAC_JWT_API_CRUD/controllers) : Has the logic to handle the incoming request and perform the proper DB operations.<br/>
[`config`](https://github.com/Vishnuvarthangs/NodeJs/tree/RBAC_JWT_API_CRUD/config) : Has config for JWT secrets.

``

## Git setup

```

git init

git status

git branch -M RBAC_JWT_MVC_API_CRUD_MongoDB

git add README.md

git add LICENSE

git config user.email "vishnuvarthan.mail@gmail.com"

git config user.name "Vishnuvarthan"

git add .

git commit -m "Initial Commit: RBAC_JWT_MVC_API_CRUD_MongoDB"

git branch -M RBAC_JWT_MVC_API_CRUD_MongoDB

git remote add origin https://github.com/Vishnuvarthangs/NodeJs.git

--git push -u origin RBAC_JWT_MVC_API_CRUD_MongoDB

git push -f origin RBAC_JWT_MVC_API_CRUD_MongoDB

https://stackoverflow.com/questions/11696295/rejected-master-master-non-fast-forward

https://stackoverflow.com/questions/2452226/master-branch-and-origin-master-have-diverged-how-to-undiverge-branches

```
