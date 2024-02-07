# node-role-based-authorization-api

Node.js Role Based Authorization API

For documentation and instructions check out
https://jasonwatmore.com/post/2018/11/28/nodejs-role-based-authorization-tutorial-with-example-api

https://github.com/cornflourblue/node-role-based-authorization-api

---

jwt({ secret, algorithms: ['HS256'] }),
^
TypeError: jwt is not a function

https://stackoverflow.com/questions/63661915/typeerror-expressjwt-is-not-a-function

npm uninstall express-jwt
npm install express-jwt@6.1.0

---

## To Run this Project via NPM follow below:

```bash
npm install
npm run dev
```

## Git setup

```

git init

git status

git branch -M RBAC_JWT_Auth_API_Without_DB

git add README.md

git add LICENSE

git config user.email "vishnuvarthan.mail@gmail.com"

git config user.name "Vishnuvarthan"

git add .

git commit -m "Initial Commit: RBAC_JWT_Auth_API_Without_DB"

git branch -M RBAC_JWT_Auth_API_Without_DB

git remote add origin https://github.com/Vishnuvarthangs/Vishnuvarthan.git

--git push -u origin RBAC_JWT_Auth_API_Without_DB

git push -f origin RBAC_JWT_Auth_API_Without_DB

https://stackoverflow.com/questions/11696295/rejected-master-master-non-fast-forward

https://stackoverflow.com/questions/2452226/master-branch-and-origin-master-have-diverged-how-to-undiverge-branches

```