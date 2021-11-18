/**
 * Entry point for the Express API Server
 */

import express from 'express';
import cors from 'cors';
import shoppinglist from './controllers/shoppinglist';
import users from './controllers/users';

const app = express();
const PORT = 8000;

app.use(cors({
  origin: 'http://192.168.0.163:4200'
}))
app.use(express.json());

const baseRoutes = express.Router();
baseRoutes.get('/', (req,res) => res.send('Welcome to Grocery Cookbook'));

app.use('/', baseRoutes);
app.use('/users', users);
app.use('/shoppinglist', shoppinglist)


const startup = () => app.listen(PORT, () => {
  console.log(`Express API is running at http://localhost:${PORT}`);
})

startup();