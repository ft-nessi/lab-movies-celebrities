// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");

// all your routes here

router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res) => {
  try {
    const celebrityInfo = await new CelebrityModel({ ...req.body });
    await celebrityInfo.save();
    res.redirect("/celebrities");
  } catch (err) {
    console.error("Hey this is an error!");
    res.render("celebrities/new-celebrity");
  } finally {
  }
});

router.get("/celebrities", async (req, res) => {
  try {

    const allCelebrities = await CelebrityModel.find();
    console.log(allCelebrities);
    res.render("celebrities/celebrities.hbs", {allCelebrities});

  } catch (err) {
      console.error("Hey this is an error!")
  } finally {
  }
});

module.exports = router;
