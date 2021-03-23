const express = require('express');
const multer = require('multer');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

const app = express();


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,  ()=> console.log('Database connected'))

////////////
app.use(express.static('public'))

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
  cb(null, Date.now() + '-' + file.originalname)
  }
  });

const upload = multer({ storage });
app.use(cors());

app.post('/multiupload', upload.single('image'), (req, res) => {
  if (req.file)
  res.json({
  imageUrl: `images/uploads/${req.file.filename}`
  });
  else 
  res.status("409").json("No Files to Upload.");

 // console.log("hey")
});
//////////
const bodyParser = require('body-parser');

const path = require('path');
app.use(fileUpload());

app.use(express.json())


app.post('/upload', (req, res) => {

    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
      
  });
});


app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use('/app', routesUrls)
app.listen(5000, () => console.log('Server Started...'));