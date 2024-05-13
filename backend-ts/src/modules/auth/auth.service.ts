import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserDto } from "../user/user.dto";
import { JwtService } from "@nestjs/jwt";
import { AccessTokenResponse } from "./auth.dto";

@Injectable()
export class AuthService {
    constructor( private readonly jwt: JwtService) {}
    async createToken(email: string) {
        const payload = { email };
        return {
            access_token: await this.jwt.sign(payload),
        }
    }
    async verifyToken(token: string): Promise<AccessTokenResponse> {
        try {
            if (!token) {
                return {
                    isValidToken: false,
                };
            }
            const response = this.jwt.verify(token);
            //console.log('Jwt Auth Response, ' + JSON.stringify(response));
            return {
                isValidToken: true,
                email: response.email,
            };
        } catch (err) {
            throw new UnauthorizedException('Invalid token, Authenticate first');
        }
    }
}
