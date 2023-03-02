const mongoose = require("mongoose");


const Noteschema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true
  }
});

module.exports = mongoose.model("Note", Noteschema);