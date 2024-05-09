import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Paragraph = styled.p`
  font-size: 80px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2em;
  }
  input {
    font-size: 16px;
    height: 40px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;

    &:focus {
      border-color: ${colors.primaryColor};
    }
  }
`;
