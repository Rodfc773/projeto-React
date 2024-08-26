import { useEffect, useState } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyle';
import Loading from '../../components/Loading';
import { Form, Title } from '../Photos/styled';
import axios from '../../services/axios';
import History from '../../services/history';
import * as actions from '../../store/modules/auth/action';

export default function Photos({ match }) {
  const id = get(match, 'params.id', '');
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        setPhoto(get(data, 'Files[0].url', ''));
        setIsLoading(false);
      } catch (error) {
        toast.error('Something went wrong aboute the picture ');
        setIsLoading(false);
        History.push('/');
      }
    };

    getData();
  }, [id]);

  const handleChange = async (e) => {
    const foto = e.target.files[0];
    const photoUrl = URL.createObjectURL(foto);

    setPhoto(photoUrl);

    console.log(photo);

    const formData = new FormData();

    formData.append('aluno_id', id);
    formData.append('image', foto);

    console.log(formData);

    try {
      setIsLoading(true);

      await axios.post('/files/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Photo was send with success');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      const { status } = get(error, 'response', '');

      toast.error('A error was occurred about the send of the image');

      console.log(error);

      if (status === 401) dispatch(actions.loginFailure());
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Photos</Title>

      <Form>
        <label htmlFor="foto">
          {photo ? <img src={photo} alt="photo" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Photos.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired, // ou PropTypes.number, dependendo do tipo de id
    }).isRequired,
  }).isRequired,
};
