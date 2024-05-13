import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./auth.strategy";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: process.env.SECRET,
        signOptions: {
            expiresIn: '1h'
        }
    })],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}