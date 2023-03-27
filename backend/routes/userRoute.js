
const express = require('express');
const { getAllUsers,registerUser,loginUser,logout} = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { getAllBooks,createBook,updateBook, deleteBook , getBookDetails } = require('../controllers/bookController');

const router = express.Router();

router.route('/users').get(isAuthenticatedUser,authorizeRoles("admin"),getAllUsers)
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)
router.route('/user/:id').put(updateBook).delete(deleteBook).get(getBookDetails)

module.exports = router