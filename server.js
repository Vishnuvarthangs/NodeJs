const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

// mongoose.set('strictQuery', false); 

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Infinijith application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "User"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'User' to roles collection");
      });

      new Role({
        name: "Moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Moderator' to roles collection");
      });

      new Role({
        name: "Admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Admin' to roles collection");
      });

      new Role({
        name: "Owner"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Owner' to roles collection");
      });

      new Role({
        name: "CEO"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'CEO' to roles collection");
      });

      new Role({
        name: "HR"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'HR' to roles collection");
      });

      new Role({
        name: "Business Analyst"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Business Analyst' to roles collection");
      });

      new Role({
        name: "Product Owner"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Product Owner' to roles collection");
      });

      new Role({
        name: "Project/Technical Manager"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Project/Technical Manager' to roles collection");
      });

      new Role({
        name: "Project/Team/Technical Lead"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Project/Team/Technical Lead' to roles collection");
      });

      new Role({
        name: "Software/Solution/Technical Architect"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Software/Solution/Technical Architect' to roles collection");
      });

      new Role({
        name: "Scrum Master"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Scrum Master' to roles collection");
      });

      new Role({
        name: "Scrum Team"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Scrum Team' to roles collection");
      });

      new Role({
        name: "Developers"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Developers' to roles collection");
      });

      new Role({
        name: "QA Team"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'QA Team' to roles collection");
      });

      new Role({
        name: "UX/UI Designers"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'UX/UI Designers' to roles collection");
      });

      new Role({
        name: "Testers"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Testers' to roles collection");
      });

      new Role({
        name: "Quality Assurance Engineer"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'Quality Assurance Engineer' to roles collection");
      });

      
    }
  });
}
