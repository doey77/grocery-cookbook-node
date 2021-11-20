import { Body, Controller, Get, Post, Route } from 'tsoa';
import { shoppingListService, ShoppingListSyncArgs } from '../services/shoppinglist';

@Route("shoppinglist")
export class ShoppingListController extends Controller {
    
    @Get()
    public async get() {
        return shoppingListService.get();
    }

    @Post("sync")
    public async sync(@Body() body: ShoppingListSyncArgs) {
        return shoppingListService.sync(body);
    }
}