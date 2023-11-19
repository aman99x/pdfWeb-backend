# PDF Processing Server
This is a simple Node.js server built with Express.js that allows users to upload PDF files and retrieve information about the uploaded PDF documents.

## Features
## File Upload: 
    Users can upload a PDF file to the server.
## PDF Processing: 
    Upon uploading a PDF file, the server extracts information such as the number of pages in the document.
## Error Handling: 
    The server handles various error scenarios, such as invalid file uploads or processing errors.

## Setup
Clone this repository or download the files.
Install the necessary dependencies using npm install.
Start the server using node app.js or npm start.

## Endpoints
## GET /: Root endpoint that displays a welcome message indicating the PDF processing server is running.
## POST /upload-pdf: Endpoint for uploading a PDF file. The endpoint expects a single file upload with the key pdfFile. Upon successful processing, it returns the number of pages in the uploaded PDF document.

## Dependencies
## Express.js: Web application framework for Node.js used to handle HTTP requests and routes.
## Multer: Middleware for handling file uploads.
## pdf-lib: Library for manipulating PDF documents.
## Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) to handle requests from different origins.

## Usage
## Send a POST request to /upload-pdf with a PDF file attached as pdfFile.
## Receive a response indicating the successful processing of the PDF file along with the number of pages.
