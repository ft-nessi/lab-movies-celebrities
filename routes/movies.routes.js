// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model")
const MoviesModel = require("../models/Movies.model");

// all your routes here

router.get("/movies/create", async (req, res) => {
    const celebritiesFromDb = await CelebrityModel.find()

    res.render("movies/new-movie", {celebritiesFromDb});
});

router.post("/movies/create", async (req, res) => {
    try{
        const createMovie = await MoviesModel({...req.body})
        await createMovie.save();
        res.redirect("/movies");
    }
    catch(err){
        console.error("Hey here is an error!");
    }

    res.render("movies/new-movie", {celebritiesFromDb});
})

module.exports = router;
