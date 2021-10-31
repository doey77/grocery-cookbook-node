import express from 'express';

const users = express.Router();

users.get('', (req, res) => {
    res.send('Users resource');
});

export default users;