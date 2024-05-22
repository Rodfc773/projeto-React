import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Paragraph = styled.p`
  font-size: 80px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 5px;

  input {
    margin-top: 7px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 5.75vh;
    padding: 0px 10px;

    &:focus {
      border-color: ${colors.primaryColor};
    }
  }

  button {
    margin: 15px 0px;
  }
`;
