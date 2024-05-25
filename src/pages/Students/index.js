import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Title, ProfilePicture } from './styled';
import { Container } from '../../styles/GlobalStyle';
import axios from '../../services/axios';
import { StudentsContainer } from './styled';
import Loading from '../../components/Loading';

export default function Students() {
  const [students, setStudent] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/students');
      console.log(response.data);
      setStudent(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Students</Title>
      <StudentsContainer>
        {students.map((student) => (
          <div key={String(student.id)}>
            <ProfilePicture>
              {get(student, 'Files[0].url', false) ? (
                <img src={student.Files[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{student.nome}</span>
            <span>{student.sobrenome}</span>

            <Link to={`/student/`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/student/`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </StudentsContainer>
    </Container>
  );
}
