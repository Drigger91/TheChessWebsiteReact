import { Body, Controller, Get, Headers, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { ResponseSchema } from "src/common/request-response.dto";
import { UserDto, UserLoginDto } from "./user.dto";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get('/check')
    healthCheck(): string {
        return this.userService.healthCheck();
    }
    @Post('/create')
    @UsePipes(new ValidationPipe({ transform : true }))
    async createUser(@Body() userDto: UserDto): Promise<any> {
        return this.userService.createUser(userDto);
    }
    @Get('/profile')
    async getUserProfile(@Headers('authorization') accessToken: string) {
        return await this.userService.getProfileForUser(accessToken);
    }
    @Post('/login')
    @UsePipes(new ValidationPipe({ transform : true }))
    async loginUser(@Body() userDto: UserLoginDto): Promise<any> {
        return await this.userService.loginUser(userDto);
    }
}