require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  profileImage: String,
  bio: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }]
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
