``

# About this course

```

https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728820#overview

https://github.com/andrewjmead/node-course-v3-code


Learn Node.js by building real-world applications with Node JS, Express, MongoDB, Jest, and more!

The Complete Node.js Developer Course covers the fundamentals of Node before diving deep into great tools like Express, Mongoose, and MongoDB.

The entire course is based around a single goal: Turning you into a professional Node developer capable of developing, testing, and deploying real-world production applications.

You’ll be building four projects:

1. A note-taking app to get your feet wet

2. A weather application that interacts with the MapBox and Dark Sky APIs

3. A task manager REST API complete with user accounts and authentication

4. A real-time chat app with a client-side companion

By the end, you’ll be able to take what you’ve learned and launch your own Node application.

During eight chapters you'll learn:

1. Node.js

2. Npm

3. Asynchronous programming

4. ES6/ES7

5. MongoDB

6. Express

7. Socket.IO

8. JWT Authentication

9. Mongoose

10. File and image uploads

11. Email sending

12. Application deployment with Heroku

13. Version control with Git

14. GitHub

15. REST API Design

16. Code testing

17. Debugging

18. Jest

19. Many more tools



What you’ll learn

1. Completely refilmed for 3rd edition
2. Build, test, and launch Node apps
3. Create Express web servers and APIs
4. Store data with Mongoose and MongoDB
5. Use cutting-edge ES6/ES7 JavaScript
6. Deploy your Node apps to production
7. Create real-time web apps with SocketIO

Are there any course requirements or prerequisites?
1. A computer on which you can install software (Windows, MacOS, or Linux)
2. A basic understanding of JavaScript (variables, functions, objects, arrays, if statements)

```

# Project setup

```
npm init -y
npm install express
npm install nodemon
npm i hbs
npm i hbs@4.0.1
nodemon src/app.js -e js,hbs
npm i request@2.88.0

npm install --save forecast

nodemon app.js -- --config # pass config to app.js

npm update

npm audit fix --force

npx kill-port --port 3000

npm uninstall -g nodemon

npm install nodemon@3.0.3 --save-dev

```

### Run

```
node app.js

npm run start

npm run dev

```

## Git setup

```

git init

git add README.md

git config user.email "vishnuvarthan.mail@gmail.com"

git config user.name "Vishnuvarthan"

git branch -M Node_Course

git status

git add .

git reset --> To unstage all files from the current change set:

git commit -m "UDEMY: Node JS Course"

git branch -M Node_Course

git remote add origin https://github.com/Vishnuvarthangs/Vishnuvarthan.git

---git push -u origin Node_Course

git push -f origin Node_Course

https://stackoverflow.com/questions/11696295/rejected-master-master-non-fast-forward

git remote

```

# SSH setup

```

ls -a -l ~/.ssh

ssh-keygen -t rsa -b 4096 -C "vishnuvarthan.mail@gmail.com"        :--> shown below command
********************************************************************************************************************************
    SHA256:gtV4YDghbtPwjjS/E90SBXdWDy9Hj2q0qxZMHMn37rY vishnuvarthan.mail@gmail.com
********************************************************************************************************************************
ls -a -l ~/.ssh

eval "$(ssh-agent -s)"

ssh-add -K ~/.ssh/id_rsa         :--> for linux able to register ssh, Should remove -K for windows to use below command

ssh-add ~/.ssh/id_rsa

--------

cat ~/.ssh/id_rsa.pub            :--> below command listed SSH in Git repository to add SSH keys
********************************************************************************************************************************
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCdDtBkd06egBaeMR+KPm3iYghOhNszXJJUg4CnrYcAPiAdD9Vnf8l0eqEWrAZPkzZT+e4xfuUWtmVhfzxXQjPZGJ3H5GevpihmhrqzVEq0PKVq4fMc5Ow6dHD5CFi6/yxF+3Oi94MHywCRT/TFLR4Un1l0bKUcJJGToqOiwdJAtY440Ke86/L1nXeq5FrrCa8PQCeYDmTGgZJO5fYDr0g2uyk+P1+fbTNT7yA8dUWxjpYYGNSv8xu0ShoLkGws6n7CGbyGfGe2gjOk1U1fPmF4eTSNDDobJfI3rB73OXiwIcJPd1QZJ2voWkWUuFFKUbHyQyzz184h7GvjnBVwo31TbCuTIiUqrOdNM4/4qfJLdX0vYo6Gq+y4EYf7w7Cp7WWG5I63hXMGKOtITFjVPSE7zZShOthWaDWfB5CFYeSgbuIej0kasYSsPlCOhNGVRbkaFHv76tyVF1DID8yggHdZVzk/G3ikGiK/hRL0LOa7KkJRaKBA0k2OeMuEnsyC7G7NrDY1saf9+6feLfrQpYowaY0cl7jB6fUMegXw4UmmHZ1qjMRLL0VRYgpaulyuJv/xD5dKCbgwthpcn6PlVjFynV8z7hJ11twdUZ3SDF+2er4h/O0PnlBkyfo5h5vk/nGFY0iTbBv3QnLkhBcdF6zS+oZuC0QQ5m5T5a//Frvy1Q== vishnuvarthan.mail@gmail.com
********************************************************************************************************************************

https://github.com/settings/ssh/new

https://github.com/settings/keys

ssh -T git@github.com

yes

********************************************************************************************************************************
The authenticity of host 'github.com (140.82.121.4)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
Hi Vishnuvarthangs! You've successfully authenticated, but GitHub does not provide shell access.
********************************************************************************************************************************

heroku keys:add

heroku create

git remote

git push heroku master

```

# Heroku setup

```

https://dashboard.heroku.com/apps

https://devcenter.heroku.com/articles/getting-started-with-nodejs


heroku login

heroku create


```
