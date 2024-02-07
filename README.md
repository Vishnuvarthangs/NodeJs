## Building a Role-Based Access System in Node.js

### web Link:- https://code.pieces.app/blog/role-based-access-systems-in-nodejs

### git Link:- https://github.com/King-AJr/rbacNodeServer


## To Run this Project via NPM follow below:

```bash
npm install
npm run dev
```

## Git setup

```

git init

git status

git branch -M RBAC_JWT_Auth_API

git add README.md

git add LICENSE

git config user.email "vishnuvarthan.mail@gmail.com"

git config user.name "Vishnuvarthan"

git add .

git commit -m "Initial Commit: RBAC_JWT_Auth_API"

git branch -M RBAC_JWT_Auth_API

git remote add origin https://github.com/Vishnuvarthangs/Vishnuvarthan.git

--git push -u origin RBAC_JWT_Auth_API

git push -f origin RBAC_JWT_Auth_API

https://stackoverflow.com/questions/11696295/rejected-master-master-non-fast-forward

https://stackoverflow.com/questions/2452226/master-branch-and-origin-master-have-diverged-how-to-undiverge-branches

```

## Building a Role-Based Access System in Node.js

Organizations of all sizes require developers to limit access to certain resources and the rights to implement certain effects based on the hierarchy of users in the system. In this article, we'll be looking at how we can implement a role-based access system in a Node.js server.

To be able to follow the rest of the article, you should be familiar with the following:

JavaScript
Node.js and how to use it to create a server
Database creation with Mongoose
Postman
Before we continue, let's explain some fundamental concepts.

What is a Role-Based Access System?
Role-based access control (RBAC) is a security approach that restricts network access and assigns permissions to users based on their role within an organization.

A simple example of a role-based access system is a blog with a set of permissions that allows users to create, edit, read, or delete articles in a writing application. For this blog, we could implement three roles:

Reader
Writer
Admin
The Reader can only read an article, the Writer has permission to create, edit, delete and read articles, and the Admin can add or remove a Writer. With a role-based system in place, a Reader will not be able to access the Writer's role and a Writer will not be able to access the Admin's role.

How Does a Role-Based Access System Work?
Role-based access systems rely on every user or entity within a system having a designated role. This role determines their permissions. Here's how it works:

When a user creates an account, a role is assigned to the account based on its group. This role is then stored alongside other information in the database.
When the user attempts to access a protected route, our middleware retrieves the user's information from the database.
The user's role is cross-checked to confirm if their role matches the required role to access the information.
If the user's role matches the required role, access is granted. If not, access is denied.
Advantages of a Role-Based Access System
The following are the benefits of using a role-based access system:

Security: Coupled with proper authentication processes, RBAC enhances overall security as it pertains to privacy, confidentiality, and access management to resources and other sensitive data and systems.
Reduces susceptibility to cyber attacks: As different groups have different roles and no one person has sole control of the system, cyber attacks on a single account are less likely to cause substantial harm to entire systems.
Decreases unnecessary customer support: In some systems, multiple passwords are assigned to a user for different routes and endpoints. The more passwords are assigned to a user, the more likely they are to forget them. Role-based access control takes away the need for multiple passwords and instead grants access based on the initial role assigned to a user.
Establishing organizational structures: RBAC makes it easy to distinguish which user is responsible for each task. This makes it easier to know who did what and uncover the culprit of an information leak or a network issue.
Disadvantages of a Role-Based Access System
Despite the numerous advantages of a role-based access system, there are certain downsides, including:

Role explosion: When a new worker or team is onboarded and their duties haven't been properly outlined, more roles may be created. Similarly, when a user from one group requires access to information from another group, a new role is assigned to this user. The addition of many roles makes it difficult to keep track of who has access to what, thereby complicating the role structure and compromising the effectiveness of the system.
Conflicting combinations: Different roles assigned to different users can contain conflicting access. For example, it’s possible that a user can be given a role that enables them to create an order and the role required to approve the same order. This can create business threats.
Best Practices for Implementing a Role-Based Access System
When building a role-based access system, you can take action to maintain the system and reduce confusion.

Define the data and resources to which access should be restricted.
Classify users into different groups based on their roles and required access to certain information. Any unnecessary exceptions should be cleaned up.
Avoid creating too many roles. Creating too many roles defeats the purpose of the system and might lead to role explosion.
Make roles reusable. If only one user in a system has a particular role, that role should not be managed by a role-based system. All defined roles should apply to groups of people, otherwise, you'll have too many roles.
Analyze how roles can be changed when necessary, how new users can be registered, and how old accounts can be deleted from a group.
Continually adapt. The first iteration of a role-based system will require some changes, so the system should be continually checked and adapted to encompass a growing organization.
Building our Node.js Web Server
For better understanding, we'll build a server for a company that has three departments:

Software Engineering
Marketing
Human Resources
First, we'll create a directory for our server. Navigate to a suitable directory and run the following code in your terminal:

mkdir Company-Server
After creating our directory, we'll navigate to this directory and initialize npm:

npm init
Installing Required Packages
For this project, we'll use the following dependencies and packages:

dotenv: This package loads environmental variables from an env file into Node’s process.env object.
bcrypt: This is used to hash our passwords and other sensitive information before sending them to the database to protect us against a breach of our database.
body-parser: This is used to parse incoming data from the request body and attaches the parsed value to an object which can then be accessed by an Express middleware.
jsonwebtoken: This provides a means of representing claims transferred between two parties, ensuring that the information transferred has not been tampered with by an unauthorized third party.
Express.js: This makes building APIs and server-side applications with Node.js effortless by providing us with useful features such as routing, implementing middleware, and so on.
Mongoose: Helps us connect with our database and provides features such as schema validation, managing relationships between data, etc.
npm i jsonwebtoken mongoose bcrpyt body-parser express dotenv
Setting up our Database
For our database, we'll be using a Mongo Atlas database. You can create an account and easily link it to your Express server by following these steps:

To create our employee schema, copy the code below:

const { Schema, model } = require("mongoose");

const EmployeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["se", "marketer", "HR", "admin"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Employee", EmployeeSchema);
Setting up User Authentication
Before the role-based access system checks for a user’s role, we'll need to set up a route to get our employees into the system. After this, we'll grant them access to certain resources based on their roles.

We’ll set up our logic for user signup, login, and authentication. Let’s start with signup.

User Signup
For our Signup endpoint, we will do the following:

Receive the user's information from the frontend request
Hash the password
Send the information to our database
Redirect the employee to the sign-in route
const bycrypt = require('brypt');
const Employee = require("../Database/employee");

const employeeSignup = async (req, role, res) => {
  try {
    //Get employee from database with same name if any
    const validateEmployeename = async (name) => {
      let employee = await Employee.findOne({ name });
      return employee ? false : true;
    };

    //Get employee from database with same email if any
    const validateEmail = async (email) => {
      let employee = await Employee.findOne({ email });
      return employee ? false : true;
    };
    // Validate the name
    let nameNotTaken = await validateEmployeename(req.name);
    if (!nameNotTaken) {
      return res.status(400).json({
        message: `Employee name is already taken.`,
      });
    }

    // validate the email
    let emailNotRegistered = await validateEmail(req.email);
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: `Email is already registered.`,
      });
    }

// Hash password using bcrypt
    const password = await bcrypt.hash(req.password, 12);
    // create a new user
    const newEmployee = new Employee ({
      ...req,
      password,
      role
    });

    await newEmployee .save();
    return res.status(201).json({
      message: "Hurry! now you are successfully registred. Please nor login."
    });
  } catch (err) {
    // Implement logger function if any
    return res.status(500).json({
      message: `${err.message}`
    });
  }
};
With that done, we have set up our signup logic. Let's set up our login logic.

User Login
Every employee that wants to log in has to log in from the route designed for their department. For example, if a software engineer tries to sign into the system via the login route for the marketing department, the software will deny access.

For our login route we'll do the following:

Receive the employee's information from the front-end request
Verify that the employee exists in our database
Check if the employee is signing in via the correct route for their department
If the user is signing in through the route for their department, we'll then check if the password is correct
If the password is correct, the user information coupled with a JWT token will be sent to the client side
const jwt = require("jsonwebtoken");
require('dotenv').config();
const Employee = require("../Database/employee");

const employeeLogin = async (req, role, res) => {
  let { name, password } = req;

  // First Check if the user exist in the database
  const employee = await Employee.findOne({ name });
  if (!employee) {
    return res.status(404).json({
      message: "Employee name is not found. Invalid login credentials.",
      success: false,
    });
  }
  // We will check the if the employee is logging in via the route for his departemnt
  if (employee.role !== role) {
    return res.status(403).json({
      message: "Please make sure you are logging in from the right portal.",
      success: false,
    });
  }

  // That means the employee is existing and trying to signin fro the right portal
  // Now check if the password match
  let isMatch = await bcrypt.compare(password, employee.password);
  if (isMatch) {
    // if the password match Sign a the token and issue it to the employee
    let token = jwt.sign(
      {
        role: employee.role,
        name: employee.name,
        email: employee.email,
      },
      process.env.APP_SECRET,
      { expiresIn: "3 days" }
    );

    let result = {
      name: employee.name,
      role: employee.role,
      email: employee.email,
      token: `Bearer ${token}`,
      expiresIn: 168,
    };

    return res.status(200).json({
      ...result,
      message: "You are now logged in.",
    });
  } else {
    return res.status(403).json({
      message: "Incorrect password.",
    });
  }
};
Adding our Role-Based Access System to our Server
Every logged-in user has a JWT token; we'll create a middleware that checks for a token. This middleware will also verify the token.

We'll also create another middleware for restricting access to certain routes to only users with specific roles.

/**
 * @DESC Verify JWT from authorization header Middleware
 */
const employeeAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(process.env.APP_SECRET);
  if (!authHeader) return res.sendStatus(403);
  console.log(authHeader); // Bearer token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
    console.log("verifying");
    if (err) return res.sendStatus(403); //invalid token

    console.log(decoded); //for correct token
    next();
  });
};

/**
 * @DESC Check Role Middleware
 */
const checkRole = (roles) => async (req, res, next) => {
  let { name } = req.body;

  //retrieve employee info from DB
  const employee = await Employee.findOne({ name });
  !roles.includes(employee.role)
    ? res.status(401).json("Sorry you do not have access to this route")
    : next();
};
The employeeAuth function checks for the presence of a JWT. If it finds one, it then verifies it.

The checkRole function checks if the user requesting access has the required role to access that route.

Setting up our Routes
In this section, we'll be creating the following sets of routes and applying the required middleware.

Sign-up routes for each department
Login routes for each department
Protected routes for each department
// Software engineering Registeration Route
app.post("/register-se", (req, res) => {
  employeeSignup(req.body, "se", res);
});

//Marketer Registration Route
app.post("/register-marketer", async (req, res) => {
  await employeeSignup(req.body, "marketer", res);
});

//Human resource Registration route
app.post("/register-hr", async (req, res) => {
  await employeeSignup(req.body, "hr", res);
});

// Software engineers Login Route
app.post("/Login-se", async (req, res) => {
  await employeeLogin(req.body, "se", res);
});

// Human Resource Login Route
app.post("/Login-hr", async (req, res) => {
  await employeeLogin(req.body, "hr", res);
});

// Marketer Login Route
app.post("/Login-marketer", async (req, res) => {
  await employeeLogin(req.body, "marketer", res);
});

app.get("/se-protected", employeeAuth, checkRole(["se"]), async (req, res) => {
 return res.json(`welcome ${req.body.name}`);
});

app.get(
  "/marketers-protected",
  employeeAuth,
  checkRole(["marketer"]),
  async (req, res) => {
    return res.json(`welcome ${req.body.name}`);
  }
);

app.get("/hr-protected", employeeAuth, checkRole(["hr"]), async (req, res) => {
  return res.json(`welcome ${req.body.name}`);
});


``

## There is a Folder "PostmanEndpoints" which has Postman Collection File You can import this file in your postman to test this API

