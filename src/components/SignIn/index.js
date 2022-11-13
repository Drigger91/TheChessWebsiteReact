import React, { useState } from "react";
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
  const [User,setUser] = useState({email : "", password : ""});
  let key,value;
  const handleChange = (e)=>{
    key = e.target.name
    value = e.target.value
    setUser({...User , [key]:value})
}
  const handleLogIn = (e) => {
    e.preventDefault();
    User.email = User.email.trim();
    User.password = User.password.trim();
    if(User.email.length == 0){
      window.alert("Email cannot be empty!");
      return;
    }
    if(User.password.length == 0){
      window.alert("Password cannot be empty!");
      return;
    }
    console.log(User);
  }
  return (
    <Container>
      <FormWrap>
        <Icon to="/">TheChessWebsite</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" name='email'className='form-control' value={User.email} onChange={handleChange} placeholder='abc@example.com' id='email' aria-describedby='emailHelp' required />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" name='password' className='form-control' value={User.password} onChange={handleChange} id='password' aria-describedby='passwordHelp' required/>
            <FormButton type="submit" onClick={handleLogIn}>Log In</FormButton>
            <br/>
            <SignUpMessage>Don't have an account , <Link className="signupLink" to="/signup">SignUp here!</Link></SignUpMessage>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;
