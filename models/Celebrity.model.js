//  Add your code here
const {model, Schema } = require("mongoose");

const celebritySchema = new Schema({
    name: {
        type: String,
    },
    occupation: {
        type: String,
        enum: ["actor", "singer", "comedian", "unknown"],
    },
    catchPhrase: {
        type: String,
        required: true
    } 
});

const CelebrityModel = model('celebritie', celebritySchema);

module.exports = CelebrityModel;
