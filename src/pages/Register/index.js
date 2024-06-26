import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from './styled';
import { Container } from '../../styles/GlobalStyle';
import Loading from '../../components/Loading';
import * as actios from '../../store/modules/auth/action';

export default function Register() {
  const dispacth = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const nameStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;

    setEmail(emailStored);
    setNome(nameStored);
  }, [id, nameStored, emailStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    const dataErrors = formErrors();

    if (dataErrors.length > 0) {
      dataErrors.map((err) => toast.error(err));
      return;
    }

    dispacth(actios.registerRequest({ nome, email, password, id }));
  }

  function formErrors() {
    const errors = [];
    if (nome.length < 3 || nome.length > 255)
      errors.push("Your name isn't valid!");

    if (!id && (password.length < 6 || password.length > 50))
      errors.push("Your password don't met the requirements!");

    if (!isEmail(email)) errors.push("Your Email isn't valid!");

    return errors;
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Edit your profile' : 'Register your New Account!!!'}</h1>

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

        <button type="submit">
          {id ? 'Save informations' : 'Create Account'}
        </button>
      </Form>
    </Container>
  );
}
