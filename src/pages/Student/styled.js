import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 80px;
`;
export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;

    :focus {
      background-color: rgba(0.6, 0.1, 0.1, 0.7);
    }
  }
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 10 px;
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 20px;
  margin-top: 30px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 45.5%;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
