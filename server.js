import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

const distPath = path.join(__dirname, 'dist');

// Debugging: check if dist exists
if (fs.existsSync(distPath)) {
  console.log('Dist folder found at:', distPath);
  console.log('Files in dist:', fs.readdirSync(distPath));
} else {
  console.error('Dist folder NOT found at:', distPath);
}

app.use(express.static(distPath));

app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Application build not found. Please check logs.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
