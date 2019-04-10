
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

// Prep for heroku provisioning
const port = process.env.PORT || 5000;

// Importing backend routes
const users = require("./routes/api/users");
app.use("/api/users", users);

app.get('/', (req, res) => res.send('hello world!'));
app.listen(port, () => console.log(`Server is running on port ${port}`));