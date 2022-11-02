import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../SignUp";
import {
  FormButton,
  FormInput,
  Form,
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  Container,
  Icon,
  SignUpMessage
} from "./SignInElements";

const SignIn = () => {
  const User = {email : "", password : ""};
  const handleChange = (e) => {
    e.preventDefault();
  }
  return (
    <Container>
      <FormWrap>
        <Icon to="/">TheChessWebsite</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput value={User.email} onChange={handleChange} type="email" required />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton value={User.password} onChange={handleChange} type="submit">Log In</FormButton>
            <br/>
            <SignUpMessage>Don't have an account , <Link className="signupLink" to="/signup" element={<SignUp/>}>SignUp here!</Link></SignUpMessage>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;
