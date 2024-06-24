import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  font-size: 80px;
`;
export const StudentsContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const NewStudent = styled(Link)`
  display: block;
  padding: 10px;
  text-align: center;
`;
