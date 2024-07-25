const express = require("express");
const router = express.Router();
const path = require('path');
const imagesController = require("../controllers/imageController");
const multer = require("multer");
// Image storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });

router.post("/upload", upload.single("product"), imagesController.image);

module.exports = router;
