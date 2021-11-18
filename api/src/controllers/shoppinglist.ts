import { Router, Request, Response } from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { IShoppingListDB, IShoppingListItemDB } from '../interfaces/ShoppingList';

const shoppinglist = Router();

shoppinglist.get('', (req, res) => {
    res.send('shoppinglist resource');
});

shoppinglist.post('/sync', async (req:Request, res:Response) => {
    const lists: IShoppingListDB[] = req.body.lists;
    const items: IShoppingListItemDB[] = req.body.items;

    // TODO save to DB

    res.sendStatus(204);
});

shoppinglist.patch('', (req:Request, res:Response) => {
    
});

export default shoppinglist;