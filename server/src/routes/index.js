const express = require('express');

const router = express.Router();

//import middleware
const { auth } = require('../middlewares/auth')

//import authorization
const {
  register, login, checkAuth
} = require("../controllers/auth");

const { getFilm } = require('../controllers/films');


const { getTransaction, getAllTransactions } = require('../controllers/transactions');

//route auth
router.post("/register", register)
router.post("/login", login)
router.get("/check-auth", auth, checkAuth);

//route film
router.get("/detail-film/:id", getFilm);

//route transactions
router.get("/detail-transaction/:id", auth, getTransaction);
router.get("/data-transactions", auth, getAllTransactions);


module.exports = router;