import { Body, Controller, Get, Post, Query, Route, SuccessResponse, Tags } from "tsoa";
import { userService, userCreateArgs } from "../services/user";

@Tags("Users")
@Route("user")
export class UsersController extends Controller {

    @Get("{userId}")
    public async getUser(
        @Query() userId: number
    ) {
        return userService.get({id:userId});
    }

    @Get()
    public async getManyUsers(
        @Query() limit?: number, @Query() skip?: number
    ) {
        const args: any = {};
        if (limit) args.limit = limit;
        if (skip) args.take = skip;
        return userService.getMany(args);
    }

    @SuccessResponse("201", "Created")
    @Post()
    public async createUser(
        @Body() requestBody: userCreateArgs
    ) {
        this.setStatus(201);
        return userService.create(requestBody);
    }

}