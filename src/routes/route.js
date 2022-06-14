const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//it will create a new user
router.post("/users", userController.createUser  )

//it will provide verify user details
router.post("/login", userController.loginUser)


//1. Write a **GET api /users/:userId** to fetch user details
//return a token
router.get("/users/:userId", userController.getUserData)

// 2.- Write a **PUT api /users/:userId** to update user details.
router.put("/users/:userId", userController.updateUser)

// 3.- Write a **DELETE api /users/:userId** 
router.delete("/users/:userId",userController.deleteUser)

module.exports = router;