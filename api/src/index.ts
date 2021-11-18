/**
 * Entry point for the Express API Server
 */

import express from 'express';
import cors from 'cors';
import shoppinglist from './controllers/shoppinglist';
import users from './controllers/users';
import { createConnection } from 'typeorm';

const app = express();
const PORT = 8000;
const startup = () => app.listen(PORT, () => {
  console.log(`Express API is running at http://localhost:${PORT}`);
})

app.use(cors({
  origin: 'http://192.168.0.163:4200'
}))
app.use(express.json());

const baseRoutes = express.Router();
baseRoutes.get('/', (req,res) => res.send('Welcome to Grocery Cookbook'));

app.use('/', baseRoutes);
app.use('/user', users);
app.use('/shoppinglist', shoppinglist)

createConnection().then(async (conn) => {
  startup();
})