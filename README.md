https://www.youtube.com/watch?v=IBpKTeUGthc

https://github.com/trulymittal/role-based-access-control/tree/passport-local-only

# Role Based Access Control (...still in dev mode...)

This is a Role Based Access Control application using Nodejs, Express, Passport Js, etc.
You can use this application as the starting point for whatever project you are going to build which needs authentication and authorization.

For authentication we have only Email & Password option but other authentication options using OAuth/OAuth2.0 like Google, Facebook, Apple, GitHub, etc, can be easily incorporated.

The application is based on the **MVC pattern** i.e. Model View Controller.

**Mongoose** is used as an ORM for MongoDB for storing Users in Database.

**Passport JS** is used for local(email, password) authentication.

The application is _almost_ **production ready**.

---

## To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/Vishnuvarthangs/Vishnuvarthan
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Put your credentials in the .env file.

```bash
PORT=3000
MONGODB_URI=YOUR_MONGODB_URI(example: mongodb://localhost:27017)
DB_NAME=YOUR_DB_NAME
```

Step 4: Install MongoDB (Linux Ubuntu)

See <https://docs.mongodb.com/manual/installation/> for more infos

Step 5: Run Mongo daemon

```bash
sudo service mongod start
```

Step 6: Start the app by

```bash
npm start
```

## Author

- [**vishnuvarthan**](https://vishnuvarthan.com)

## Contribute

You can fork this repo and send me a PR.

## License

This project is licensed under the MIT License.

## Git setup

```

git init

git add README.md

git config user.email "vishnuvarthan.mail@gmail.com"

git config user.name "Vishnuvarthan"

git add .

git commit -m "Initial Commit: Role Base Passport Authenticate with Node"

git branch -M Node_Role_Base_Passport_Authentication

git remote add origin https://github.com/Vishnuvarthangs/Vishnuvarthan.git

--git push -u origin Node_Role_Base_Passport_Authentication

git push -f origin Node_Role_Base_Passport_Authentication

https://stackoverflow.com/questions/11696295/rejected-master-master-non-fast-forward

https://stackoverflow.com/questions/2452226/master-branch-and-origin-master-have-diverged-how-to-undiverge-branches

```
