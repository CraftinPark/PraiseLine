const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// MIDDLEWARE & ROUTERS
app.use(cors());
app.use(bodyParser.json());

// CONSTS
const PORT = process.env.PORT || 5000;
const MONGODB_URL =
  "mongodb+srv://CraftinPark:PpwlHJcoNkTlqyeC@cluster0.jg40t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully connected to MongoDB..."))
  .catch((error) => console.log(error.message));

const postSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  performanceDate: Date,
  author: String,
  assignments: [{ role: String, members: [String] }],
  songs: [{ title: String, author: String, key: String }],
});

const memberSchema = mongoose.Schema({
  firstJoined: Date,
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  sex: String,
  // Maybe include qualifications here?
});

const Posts = mongoose.model("Post", postSchema);
const Members = mongoose.model("Member", memberSchema);

app.get("/", (req, res) => {
  res.send("You've Succeeded");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.send(posts);
    console.log(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.post("/posts", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

app.get("/members", async (req, res) => {
  try {
    const members = await Members.find();
    res.send(members);
    console.log(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
