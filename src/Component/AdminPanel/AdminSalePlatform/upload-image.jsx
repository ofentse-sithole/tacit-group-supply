const fs = require('fs');
const path = require('path');
const multer = require('multer'); // Install with: npm install multer

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(process.cwd(), 'public', 'admin', 'images');
    
    // Create the directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Generate a unique filename to avoid overwriting
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.originalname.replace(ext, '') + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage: storage });

// Express example
module.exports = function(app) {
  app.post('/api/upload-image', upload.single('image'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      // Convert backslashes to forward slashes for consistent path handling
      const filePath = req.file.path.replace(/\\/g, '/');
      
      // Get the path relative to the public directory
      const publicPath = filePath.substring(filePath.indexOf('/public/admin/images'));
      
      return res.status(200).json({
        success: true,
        path: publicPath
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      return res.status(500).json({ error: 'Failed to upload file' });
    }
  });
};