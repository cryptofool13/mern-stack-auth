const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define our model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: String
});

// create model class

const userModel = mongoose.model("user", userSchema);

// export the model

module.exports = userModel;
