import { Title, Paragraph, Form } from './styled';
import { Container } from '../../styles/GlobalStyle';
import { get, last, set } from 'lodash';
import PropTypes, { func } from 'prop-types';
import axios from '../../services/axios';
import React, { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { isFloat, isInt } from 'validator';
import { toast } from 'react-toastify';
import History from '../../services/history';

export default function Student({ match }) {
  const id = get(match, 'params.id', 0);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/studente/${id}`);
        const profilePic = get(data, 'files[0].url', '');

        setEmail(data.email);
        setName(data.nome);
        setAge(data.idade);
        setLastName(data.sobrenome);
        setHeight(data.altura);
        setWeight(data.peso);
      } catch (error) {
        setIsLoading(false);
        const status = get(error, 'response.status', 0);
        const errors = get(error, 'response.data.errors', []);

        if (status === 400) errors.map((err) => toast.error(err));
        History.push('/');
      }
    }

    getData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = fieldsValidator();

    if (formErrors.length > 0) {
      formErrors.map((error) => toast.error(error));
      return;
    }
  };

  const fieldsValidator = () => {
    const fieldsErrors = [];

    if (!name) fieldsErrors.push("The field name can't be blank");
    if (!lastName) fieldsErrors.push("The field lastname can't be blank");
    if (!email) fieldsErrors.push("The field email can't be blank");
    if (!age) fieldsErrors.push("The field age can't be blank");

    if (name.length < 3 || name.length > 255)
      fieldsErrors.push('The field name have to be a valid name');
    if (lastName.length < 3 || lastName.length > 255)
      fieldsErrors.push('The field lastname have to be a valid lastname');
    if (!isEmail(email))
      fieldsErrors.push('The field email have to be a valid email');

    if (!isInt(age))
      fieldsErrors.push('The field age have to be a integer number');

    if (!weight && !isFloat(weight))
      fieldsErrors.push('The field weight have to be a float number');

    if (!height && !isFloat(height))
      fieldsErrors.push('The field height have to be a float number');

    return fieldsErrors;
  };

  return (
    <Container>
      <Title>{id ? 'Edit student' : 'New student'}</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student's name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Student's lastname"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Student's Email"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Student's age"
        />
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Student's height"
        />
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Student's weight"
        />

        <button type="submit">
          {id ? 'Edit new student' : 'Create new student'}
        </button>
      </Form>
    </Container>
  );
}

Student.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
