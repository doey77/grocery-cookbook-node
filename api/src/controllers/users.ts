import { Router, Request, Response } from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { getManager } from 'typeorm';
import { User } from '../db/models/User';

const users = Router();

users.get('', (req, res) => {
    res.send('Users resource');
});

users.post('', async (req:Request, res:Response) =>
{
    const user: {firstName: string, lastName: string, age: number} = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.number
    }
    getManager().create(User, user)
});

users.patch('', (req:Request, res:Response) => {
    
});

export default users;