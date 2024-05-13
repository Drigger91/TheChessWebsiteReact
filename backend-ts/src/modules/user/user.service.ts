import { BadRequestException, HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserDatabaseService } from "src/db/user/user.database.service";
import { UserDto, UserLoginDto } from "./user.dto";
import { AuthService } from "../auth/auth.service";
import { AccessTokenResponse } from "../auth/auth.dto";
import { UserEntity } from "src/db/user/user.schema";
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserService {
    constructor(
        private readonly userDbService: UserDatabaseService,
        private readonly authService: AuthService,
    ) {}
    healthCheck(): string {
        return 'All Okay';
    }
    async createUser(user: UserDto): Promise<any>  {
        const { firstName, lastName, mobileNumber, accountNumber, email, password } = user;
        const tokenResponse = await this.authService.createToken(email);
        const userEntity: UserEntity = await this.userDbService.createUser({
            firstName,
            lastName,
            mobileNumber,
            accountNumber,
            email,
            token: [tokenResponse.access_token],
            password,
        });
        
        return { user, token: tokenResponse.access_token };
    }
    async getProfileForUser(accessToken: string) {
        const isVerifiedUser: AccessTokenResponse = await this.authService.verifyToken(accessToken);
        return isVerifiedUser;
    }
    async loginUser(userDto: UserLoginDto): Promise<any> {
        const { email, password } = userDto;
        const user: UserEntity = await this.userDbService.getUserByEmail(email);
        if (!user) {
            throw new HttpException('No User found with this email', 250);
        }
        const storedPassword: string = user.password;
        const arePasswordsSame: boolean = await bcrypt.compare(password, storedPassword);

        if (!arePasswordsSame) {
            throw new UnauthorizedException('Password is incorrect');
        }

        let tokenArray: string[] = user.token;
        const newToken = await this.authService.createToken(email);
        if (tokenArray.length > 2) {
            tokenArray = [...tokenArray.slice(1), newToken.access_token];
        } else {
            tokenArray.push(newToken.access_token);
        }

        return { token : newToken.access_token };
    }
}