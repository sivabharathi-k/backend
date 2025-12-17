const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);