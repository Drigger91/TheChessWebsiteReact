import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { UserEntity, UserSchema } from "src/db/user/user.schema";
import { UserDatabaseService } from "src/db/user/user.database.service";
import { AuthModule } from "../auth/auth.module";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema}]),
        AuthModule,
    ],
    providers: [UserService, UserDatabaseService],
    controllers: [UserController]
})
export class UserModule {}