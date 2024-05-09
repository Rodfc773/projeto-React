import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import { Form } from './styled';
import { Container } from '../../styles/GlobalStyle';

export default function Register() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const errors = formErrors();

    if (errors.length > 0) {
      errors.map((err) => toast.error(err));
    }
  }

  function formErrors() {
    const errors = [];
    if (nome.length < 3 || nome.length > 255)
      errors.push("Your name isn't valid!");

    if (password.length < 6 || password.length > 50)
      errors.push("Your password don't met the requirements!");

    if (!isEmail(email)) errors.push("Your Email isn't valid!");

    return errors;
  }

  return (
    <Container>
      <h1>Register your New Account!!!</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="Name">
          Name:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label htmlFor="Email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
        </label>
        <label htmlFor="Password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
          />
        </label>

        <button type="submit"> Create Account</button>
      </Form>
    </Container>
  );
}
