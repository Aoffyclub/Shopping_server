const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Database connection
mongoose
  .connect(
    // "mongodb+srv://aoffyclub:11111@cluster0.i00tdkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    "mongodb+srv://aoffy:zaq123@cluster0.c5nzbue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("============MogoDB connect success============"))
  .catch((err) => console.log(err));

app.use("/images", express.static("./upload/images"));

// Import routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const imageRoutes = require("./routes/imageRoutes");

// Use routes
app.use(productRoutes);
app.use(userRoutes);
app.use(imageRoutes);

app.get("/", (req, res) => {
  res.send("Express is running on port " + port);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port " + port);
  } else {
    console.log("server is not running on port " + port + error);
  }
});
