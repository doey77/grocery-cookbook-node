import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Tags } from "tsoa";
import { userService, userCreateArgs } from "../services/user";

@Tags("Users")
@Route("user")
export class UsersController extends Controller {

    @Get("{userId}")
    public async getUser(
        @Path() userId: number, @Query() name?: string
    ) {
        return userService.get({id:userId, name:name});
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