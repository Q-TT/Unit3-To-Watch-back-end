////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require("mongoose")


//////////////////////
// Declare Middleware
//////////////////////

//////////////////////
// Write the routes here
//////////////////////
router.post("/", async(req,res) => {
    try {
        const keyWordInput = req.body.keyWordInput
        let movies = await fetch(`https://www.omdbapi.com/?s=${keyWordInput}&apikey=${process.env.API_KEY}`)
        let moviesData = await movies.json()
        console.log(moviesData)
        res.json(moviesData)
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;