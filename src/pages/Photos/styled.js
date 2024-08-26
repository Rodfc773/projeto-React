import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 80px;
`;
export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;

    align-items: center;
    justify-content: center;
    background: #eee;
    border: 5px dashed;
    margin: 30px auto;
    border-radius: 50%;
    overflow: hidden;
  }

  input {
    display: none;
  }
`;
