# Node.js JWT Refresh Token with MongoDB example

JWT Refresh Token Implementation with Node.js Express and MongoDB. You can know how to expire the JWT, then renew the Access Token with Refresh Token.

For instruction, please visit:

> [Node.js JWT Refresh Token with MongoDB example](https://bezkoder.com/jwt-refresh-token-node-js-mongodb/)

The code in this post bases on previous article that you need to read first:

> [Node.js + MongoDB: User Authentication & Authorization with JWT](https://bezkoder.com/node-js-mongodb-auth-jwt/)

> [Git](https://github.com/bezkoder/jwt-refresh-token-node-js-mongodb)

## User Registration, User Login and Authorization process.

The diagram shows flow of how we implement User Registration, User Login and Authorization process.

![jwt-token-authentication-node-js-example-flow](jwt-token-authentication-node-js-example-flow.png)

And this is for Refresh Token:

![jwt-refresh-token-node-js-example-flow](jwt-refresh-token-node-js-example-flow.png)

## Project setup

```
npm install
```

### Run

```
node server.js
```

## Git setup

```

git init

git status

git branch -M JWT_Refresh_Token_Node_Mongodb

git add README.md

git add LICENSE

git config user.email "vishnuvarthan.mail@gmail.com"

git config user.name "Vishnuvarthan"

git add .

git commit -m "Initial Commit: JWT_Refresh_Token_Node_Mongodb"

git branch -M JWT_Refresh_Token_Node_Mongodb

git remote add origin https://github.com/Vishnuvarthangs/NodeJs.git

--git push -u origin JWT_Refresh_Token_Node_Mongodb

git push -f origin JWT_Refresh_Token_Node_Mongodb

https://stackoverflow.com/questions/11696295/rejected-master-master-non-fast-forward

https://stackoverflow.com/questions/2452226/master-branch-and-origin-master-have-diverged-how-to-undiverge-branches

```

## API

Methods Urls Actions

---

POST /api/auth/signup signup new account
POST /api/auth/signin login an account
GET /api/test/all retrieve public content
GET /api/test/user access User’s content
GET /api/test/mod access Moderator’s content
GET /api/test/admin access Admin’s content

