import { BadRequestException } from "@nestjs/common";
import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class UserEntity {
    @Prop({ required : true, unique: true})
    email: string;
    @Prop({ required: true})
    password: string;
    @Prop()
    token: string[];
    @Prop({ required: true })
    firstName: string;
    @Prop({ required: true })
    lastName: string;
    @Prop({required: true, unique: true})
    mobileNumber: string;
    @Prop()
    accountNumber: string;
}


const UserSchema = SchemaFactory.createForClass(UserEntity);

// UserSchema.path('mobileNumber').validate({
//     validator: (mobileNumber: string) => {
//         try {
//             return /^[6-9][0-9]{9}$/.test(mobileNumber);
//         } catch (err) {
//             throw new BadRequestException(err);
//         }
//     },
// });

// UserSchema.path('email').validate({
//     validator: (email) => {
//         try {
//             return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
//         } catch (err) {
//             throw new BadRequestException('Invalid emailId');
//         }
//     }
// })
export { UserSchema };