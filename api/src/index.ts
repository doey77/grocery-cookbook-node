/**
 * Entry point for the Express API Server
 */

import express from 'express';
import users from './controllers/users'

const app = express();
const PORT = 8000;

const baseRoutes = express.Router();
baseRoutes.get('/', (req,res) => res.send('Welcome to Grocery Cookbook'));

app.use('/', baseRoutes);
app.use('users/', users);

app.listen(PORT, () => {
  console.log(`Express API is running at http://localhost:${PORT}`);
});