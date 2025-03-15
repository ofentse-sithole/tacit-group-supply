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
      console.log('Created directory:', uploadDir);
    }
    
    console.log('Upload destination:', uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Generate a unique filename to avoid overwriting
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const filename = file.originalname.replace(ext, '') + '-' + uniqueSuffix + ext;
    console.log('Generated filename:', filename);
    cb(null, filename);
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
      
      console.log('File uploaded:', req.file);
      
      // Convert backslashes to forward slashes for consistent path handling
      const filePath = req.file.path.replace(/\\/g, '/');
      
      // Get the path relative to the public directory
      let publicPath;
      if (filePath.includes('/public/')) {
        publicPath = filePath.substring(filePath.indexOf('/public/'));
      } else if (filePath.includes('\\public\\')) {
        // For Windows paths
        publicPath = '/' + filePath.split('\\public\\')[1].replace(/\\/g, '/');
      } else {
        publicPath = '/admin/images/' + path.basename(filePath);
      }
      
      console.log('Public path:', publicPath);
      
      return res.status(200).json({
        success: true,
        path: publicPath
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      return res.status(500).json({ error: 'Failed to upload file', details: error.message });
    }
  });
};