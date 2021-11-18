import { Router, Request, Response } from 'express';
import { checkSchema, validationResult } from 'express-validator';

const users = Router();

users.get('', (req, res) => {
    res.send('Users resource');
});

users.post('', async (req:Request, res:Response) =>
{


});

users.patch('', (req:Request, res:Response) => {
    
});

export default users;