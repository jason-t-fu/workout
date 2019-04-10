
// Route setup
const express = require('express');
const router = express.Router();

// Import bcrypt
const bcrypt = require("bcryptjs");

// JSON web tokens
const jwt = require("jsonwebtoken");
const key = require("../../config/keys").secretOrKey;

// Import User model
const User = require("../../models/User");

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "A user has already been registered with this email." });
      }
      else {
        const newUser = new User({
          email: req.body.email,
          username: req.body.username,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                const payload = {
                  id: user.id,
                  name: user.name
                };

                jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(404).json({ email: "This user does not exist" });

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { 
              id: user.id,
              name: user.name
            };

            jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
              if (err) throw err;
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            });
          } 
          else {
            return res.status(400).json({ password: "Incorrect password" });
          }
        });
    });
});

module.exports = router;