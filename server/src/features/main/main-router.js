import express from 'express';
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { jwtAuth } from '../../middleware/jwt.js';

// setting this to get absoulte path
const __dirname = dirname(fileURLToPath(import.meta.url));

export const mainRouter = express.Router();

const isProduction = process.env.NODE_ENV === 'production';

mainRouter.get('/', jwtAuth, (req, res) => {
   const fileName = isProduction ? 'main.prod.html' : 'main.dev.html';

  res.sendFile(path.join(__dirname, '../../../../client/src/main',fileName));
});


mainRouter.get('/user-name', jwtAuth, (req, res) => {
  res.json({ userName: req.userName, userId: req.userId });
});



