import React , {useState} from 'react'
import { Link } from "react-router-dom";
import SignIn from "../SignIn";
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
} from "../SignIn/SignInElements";
const SignUp = () => {
    const [User, setUser] = useState({
        name : '' , email : '' , password : '',cnfPass : ''
      })
      let key,value;
    const handleInput = (e)=>{
        key = e.target.name
        value = e.target.value
        setUser({...User , [key]:value})
    }
const handleLogin = (e)=>{
    e.preventDefault();
    User.name = User.name.trim();
    User.email = User.email.trim();
    User.password = User.password.trim();
    User.cnfPass = User.cnfPass.trim();
    if(User.name.length == 0 || User.email.length == 0 || User.password.length == 0 || User.cnfPass.length == 0) {
        if(User.name.length == 0){
            window.alert("Name is required!");
            return;
        }
        if(User.email.length == 0){
            window.alert("Email is invalid");
            return;
        }
        if(User.password.length == 0){
            window.alert("Password shouldn't be blank");
            return;
        }
        if(User.password != User.cnfPass){
            window.alert("Passwords should match");
            return;
        }
    }
    console.log(User)
}
  return (
    <Container>
    <FormWrap>
      <Icon to="/">TheChessWebsite</Icon>
      <FormContent>
        <Form method='POST'>
          <FormH1>Create your account</FormH1>
          <FormLabel htmlFor="name"  >Name</FormLabel>
          <FormInput aria-required = "true" type="name" name='name' placeholder='Full name' className='form-control' value={User.name} onChange={handleInput}  id="name" aria-describedby='nameHelp' required/>
          <FormLabel htmlFor="email" >Email</FormLabel>
          <FormInput type="email" name='email'className='form-control' value={User.email} onChange={handleInput} placeholder='abc@example.com' id='email' aria-describedby='emailHelp' required />
          <FormLabel htmlFor="password">Password </FormLabel>
          <FormInput type="password" name='password' className='form-control' value={User.password} onChange={handleInput} id='password'aria-describedby='passwordHelp' required />
          <FormLabel htmlFor='cnfPass'>Confirm password</FormLabel>
          <FormInput type="text" name='cnfPass' className='form-control' value={User.cnfPass} onChange={handleInput}/>
          {(User.password != User.cnfPass) ? User.cnfPass.length > 0 ? <h6 className='pass'>Passwords don't match </h6> : <h1></h1> : <h1></h1> }  <br/>
          <FormButton type="submit" onClick={handleLogin}>Sign Up </FormButton>
          <br/>
          <SignUpMessage>Already have an account , <Link className="signupLink" to="/signin" element={<SignIn/>}>Login here!</Link></SignUpMessage>
        </Form>
      </FormContent>
    </FormWrap>
  </Container>
  )
}

export default SignUp