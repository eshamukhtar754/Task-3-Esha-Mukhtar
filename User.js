const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name zaroori hai'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email zaroori hai'],
      unique: true, // UNIQUE constraint
      lowercase: true,
      trim: true,
    },
    age: {
      type: Number,
      required: [true, 'Age zaroori hai'],
      min: [18, 'Umar kam se kam 18 honi chahiye'], // CHECK constraint
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);