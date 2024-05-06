const express = require('express');
const router = express.Router();
const multer = require('multer');
const File=require('../models/file')


var app=express()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); 
    }
  });

  const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { filename, path, size } = req.file;
    const newFile = new File({
      filename,
      path,
      size
    });
    await newFile.save();
    res.json({ success: true, message: 'File uploaded successfully!', file: newFile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
