import { Router, Request, Response } from 'express';
import { User } from '../models/User';
import { checkSchema, validationResult } from 'express-validator';

const users = Router();

users.get('', (req, res) => {
    res.send('Users resource');
});

users.post('', checkSchema(User.validator()), async (req:Request, res:Response) =>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors);

    const user = new User(req.body.name, req.body.password, req.body.email);
    await user.dbCreate();
    res.send(user.name);
});

users.patch('', checkSchema(User.validator()), (req:Request, res:Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors);

    
});

export default users;