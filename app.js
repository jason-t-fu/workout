
// Express setup
const express = require("express");
const app = express();

// MongoDB connection setup
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log("Connected to MongoDB successfully"))
        .catch((err) => console.log(err));

// Node.js body parsing middlware to send JSON to frontend
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importing backend routes
// Models need to be imported before passport, models need to be defined first?
const users = require("./routes/api/users");
const exercises = require("./routes/api/exercises");
app.use("/api/users", users);
app.use("/api/exercises", exercises);

// Passport to include bearer token in headers
const passport = require("passport");
app.use(passport.initialize()); // No mount path, executed for every req
require('./config/passport')(passport);

// Prep for provisioning
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('hello world!'));
app.listen(port, () => console.log(`Server is running on port ${port}`));