const express = require("express");
const router = express.Router();
const multer = require("multer");
const fileController = require("../controllers/fileController");

// multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

// routes
router.get("/", fileController.getAllFiles);
router.post("/upload", upload.single("file"), fileController.saveFileData);
router.post('/delete/:id', fileController.deleteFile);

module.exports = router;