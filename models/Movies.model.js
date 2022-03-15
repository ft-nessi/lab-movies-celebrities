//  Add your code here
const {model, Schema } = require("mongoose");

const moviesSchema = new Schema({
    title: {
        type: String,
    },
    genre: {
        type: String,
    },
    plot: {
        type: String,
    }, 
    cast: [{ type: Schema.Types.ObjectId, ref:"CelebrityModel" }]

});

const MoviesModel = model('movie', moviesSchema);

module.exports = MoviesModel;
