const express = require('express');
const multer = require('multer');
const { PDFDocument } = require('pdf-lib');
const cors = require('cors');

const app = express();
const port = 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, 
});
app.get('/', (req, res) => {
  res.send('Welcome to the PDF processing server'); 
});

app.post('/upload-pdf', upload.single('pdfFile'), async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      throw new Error('No PDF file uploaded or invalid file format');
    }

    const pdfBytes = req.file.buffer;

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const numPages = pdfDoc.getPageCount();
    console.log('Number of pages:', numPages);

    res.status(200).send(`PDF processed successfully. Number of pages: ${numPages}`);
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).send('Error processing PDF: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
