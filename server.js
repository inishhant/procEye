const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors')
const path = require('path')



const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

const HTML_DIR = path.join(__dirname, '/public/')
app.use(express.static(HTML_DIR))


app.post('/upload-image', (req, res) => {
  const imageData = req.body.image;
  const imageBuffer = Buffer.from(imageData.split(',')[1], 'base64');
  const timestamp = new Date().getTime();
  const fileName = `public/imageCollection/image-${timestamp}.png`;
  fs.writeFile(fileName, imageBuffer, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to save image');
    } else {
        console.log(`Image saved as ${fileName}`);
        res.send(`Image saved as ${fileName}`);
    }
  });
});

app.get('/admin',(req,res)=>{
  res.sendFile(__dirname+'/admin.html');
})

app.get('/images', (req, res) => {
    fs.readdir('./public/imageCollection', (err, files) => {
        if (err) {
          console.error(err);
          res.status(500).send('Failed to list images');
        } else {
          const images = files.filter(file => file.startsWith('image-'));
          res.send(images);
        }
      });
  });

  app.get('/images/:image', (req, res) => {
    const image = req.params.image;
    res.sendFile(image, { root: __dirname+"/public/imageCollection" }, (err) => {
      if (err) {
        console.error(err);
        res.status(404).send('Image not found');
      }
    });
  });


  app.post('/data', (req, res) => {
    // Access the form data
    const formData = req.body;
    console.log(formData);
    // Write the form data to a local file
    fs.writeFile('data.txt', JSON.stringify(formData), (err) => {
      if (err) {
        console.error(err);
        res.json({ success: false });
      } else {
        res.json({ success: true });
      }
    });
  });

  app.get('/retrieve-data', (req, res) => {
    fs.readFile('data.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
      res.json(data);
    });
    
  });


app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
