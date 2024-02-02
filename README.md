# Node.js MongoDB – User Authentication & Authorization example with JWT & Mongoose

## User Registration, User Login and Authorization process.
The diagram shows flow of how we implement User Registration, User Login and Authorization process.

![jwt-token-authentication-node-js-example-flow](jwt-token-authentication-node-js-example-flow.png)


You may need to implement Refresh Token:

![jwt-refresh-token-node-js-example-flow](jwt-refresh-token-node-js-example-flow.png)


## Project setup
```
npm install

npm i express nodemon cors

npm i jsonwebtoken bcryptjs cjs commonjs

npm install mongoose@6.11.2 

npm update

npm audit fix --force

npx kill-port --port 8080
```

### Run
```
node server.js
```
### Postman
```

[
{
    "username" : "Karunamoorthy",
    "email" : "Karunamoorthy@infinijith.com",
    "password": "",
    "roles" : ["Owner", "CEO", "Admin", "HR", "Business Analyst", "Product Owner", "Project/Technical Manager", "Project/Team/Technical Lead", "Software/Solution/Technical Architect", 
		       "Scrum Master", "Scrum Team", "Developers", "QA Team", "UX/UI Designers", "Testers", "Quality Assurance Engineer", "User", "Moderator"]
},
{
    "username" : "Vishnuvarthan",
    "email" : "Vishnuvarthan@infinijith.com",
    "password": "",
    "roles" : ["Project/Team/Technical Lead", "Developers", "UX/UI Designers", "Testers", "Moderator", "Scrum Team"]
},
{
    "username" : "Sanjeev",
    "email" : "Sanjeev@infinijith.com",
    "password": "",
    "roles" : ["Developers", "UX/UI Designers", "Testers"]
},
{
    "username" : "Monish",
    "email" : "Monish@infinijith.com",
    "password": "",
    "roles" : ["Developers", "UX/UI Designers", "Testers"]
}
]

http://localhost:8080/api/auth/signup  -- POST

http://localhost:8080/api/test/all -- GET

http://localhost:8080/api/test/user  -- GET

http://localhost:8080/api/auth/signin -- POST

http://localhost:8080/api/test/user  -- GET

```

## Git setup
```

git init

git add README.md

git config user.email "vishnuvarthan.mail@gmail.com"

git config user.name "Vishnuvarthan"

git add .

git commit -m "Node.js + MongoDB: User Authentication & Authorization with JWT"

git branch -M Node_MongoDB_JWT

git remote add origin https://github.com/Vishnuvarthangs/Vishnuvarthan.git

--git push -u origin Node_MongoDB_JWT

git push -f origin Node_MongoDB_JWT

https://stackoverflow.com/questions/11696295/rejected-master-master-non-fast-forward

https://stackoverflow.com/questions/2452226/master-branch-and-origin-master-have-diverged-how-to-undiverge-branches

```