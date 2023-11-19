const express = require('express');
const multer = require('multer');
const { PDFDocument } = require('pdf-lib');
const cors = require('cors');

const app = express();
const port = 3000; // Change the port as needed

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes (adjust this for production)
app.use(cors());

// Multer configuration for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // Adjust the file size limit as needed
});
app.get('/', (req, res) => {
  res.send('Welcome to the PDF processing server'); // Provide a welcome message or instructions
});
// Handle PDF upload and page extraction
// Handle PDF upload and page extraction
app.post('/upload-pdf', upload.single('pdfFile'), async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      throw new Error('No PDF file uploaded or invalid file format');
    }

    const pdfBytes = req.file.buffer;
    console.log('PDF Bytes:', pdfBytes); // Log the content of the uploaded PDF file

    // Rest of your code for PDF processing...
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).send('Error processing PDF: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
