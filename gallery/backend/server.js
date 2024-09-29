const express = require('express');
const multer = require('multer');
const port = 3000;

const app = express();

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

    const upload = multer({ storage: storage });

app.post('/uploads', upload.single('file'), (req, res) => {
    if (req.file) {
        res.json(req.file);
    }
    res.json("upload failed");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

