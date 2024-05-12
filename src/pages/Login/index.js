import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { useDispatch } from 'react-redux';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyle';
import axios from '../../services/axios';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/action';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataErrors = formErrors();

    if (dataErrors.length > 0) {
      dataErrors.map((err) => toast.error(err));
      return;
    }

    dispatch(actions.loginRequest({ email, password }));
  };

  function formErrors() {
    const errors = [];

    if (password.length < 6 || password.length > 50)
      errors.push("email or Password isn't correct");

    if (!isEmail(email)) errors.push("email or Password isn't correct");

    return errors;
  }
  return (
    <Container>
      <h1>Login</h1>

      <Form>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="******"
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </Form>
    </Container>
  );
}
