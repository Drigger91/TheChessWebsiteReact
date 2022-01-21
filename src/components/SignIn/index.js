import React from "react";
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
} from "./SignInElements";

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">TheChessWebsite</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
