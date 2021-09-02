import React from 'react';
import { createUserProfileDocument } from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import '../assets/stylesheets/components/SignUp.scss';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return(
      <div className='sign-up'>
        <h2 className='title'>New customer registration</h2>
        <span>Create account</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='sumbit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
