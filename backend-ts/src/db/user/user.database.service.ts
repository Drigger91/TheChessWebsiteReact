import { BadRequestException, Injectable } from "@nestjs/common";
import { UserEntity } from "./user.schema";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserDatabaseService {
    constructor(
        @InjectModel(UserEntity.name)
        private model: mongoose.Model<UserEntity>,
    ) {}
    async createUser(user: UserEntity): Promise<UserEntity> {
        try {
            const { password } = user;
            const salt = await bcrypt.genSalt();
            const hashedPassword: string = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
            const newUser = new this.model(user);
            return await newUser.save();
        } catch (error) {
            if (error.code === 11000) {
                const keys = Object.keys(error.keyPattern);
                throw new BadRequestException(`User with this ${keys} already exists`);
            }
            throw error;
        }
    }
    async getUserByEmail(emailId: string): Promise<UserEntity> {
        const user: UserEntity | null =  await this.model.findOne({email: emailId}).exec();
        return user;
    }
    async getUserByPhoneNumber(mobileNumber: string): Promise<boolean> {
        return !!this.model.find({ mobileNumber}).exec();
    }
    async getUserByPrimaryFields(mobileNumber: string, emailId: string) {

    }
    async updateUser() {}
    async deleteUser() {}
}