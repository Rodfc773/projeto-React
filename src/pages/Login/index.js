import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyle';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/examples/action';

export default function Login() {
  return (
    <Container>
      <h1>Login</h1>
    </Container>
  );
}