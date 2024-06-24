import React from 'react';
import { get, noConflict } from 'lodash';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Title, ProfilePicture, StudentsContainer, NewStudent } from './styled';
import { Container } from '../../styles/GlobalStyle';
import axios from '../../services/axios';
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

  const handleFirstStepDelete = (e) => {
    e.preventDefault();

    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handeSecondStepDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/students/${id}`);

      const newStudents = [students];
      newStudents.splice(index, 1);
      setStudent(newStudents);
      setIsLoading(false);
    } catch (error) {
      const status = get(error, 'response.status', []);

      if (status === 401) {
        toast.error('You need to be logged for delete a student');
      } else {
        toast.error('A error occured while delete a student');
      }
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Students</Title>

      <NewStudent to="/student/">New student</NewStudent>
      <StudentsContainer>
        {students.map((student, index) => (
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
            <Link
              onClick={handleFirstStepDelete}
              to={`/student/${student.id}/delete`}
            >
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation
              onClick={(e) => handeSecondStepDelete(e, student.id, index)}
              size={16}
              display="none"
              cursor="pointer"
            />
          </div>
        ))}
      </StudentsContainer>
    </Container>
  );
}
