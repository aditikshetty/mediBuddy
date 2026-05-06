import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// MongoDB Integration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/medibuddy';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Chat Schema for Real-time Storage
const ChatSchema = new mongoose.Schema({
  userMessage: String,
  botResponse: String,
  timestamp: { type: Date, default: Date.now },
  language: String
});
const Chat = mongoose.model('Chat', ChatSchema);

// API Keys (Placeholders - Set these in environment variables)
const WHATSAPP_API_KEY = process.env.WHATSAPP_API_KEY || 'YOUR_WHATSAPP_KEY';
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_TELEGRAM_TOKEN';

// API Endpoints
app.post('/api/chat', async (req, res) => {
  const { message, response, lang } = req.body;
  
  try {
    // 1. Save to MongoDB
    const newChat = new Chat({
      userMessage: message,
      botResponse: response,
      language: lang
    });
    await newChat.save();

    // 2. Mock Logic for WhatsApp/Telegram notification
    console.log(`[Notification] Sending update to Telegram/WhatsApp for message: ${message}`);
    // Example: fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=YOUR_ID&text=${message}`);

    res.status(200).json({ success: true, savedId: newChat._id });
  } catch (error) {
    console.error('Error saving chat:', error);
    res.status(500).json({ error: 'Failed to save chat data' });
  }
});

const distPath = path.join(__dirname, 'dist');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Application build not found.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
