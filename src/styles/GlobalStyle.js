import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import * as colors from '../config/colors';

export default createGlobalStyle`margin: 0;
*{
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family:sans-serif;
  background-color: ${colors.primaryDarkColor};
  color: ${colors.defaultTextColor}

}
html , bordy , #root{
  height:100%;
}
button{
  cursor: pointer;
  background-color: ${colors.primaryColor};
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;

  &:hover{
    filter: brightness(80%)
  }
}
a {
  text-decoration: none;
  color: ${colors.primaryColor};

}
ul{
  list-style:none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background: ${colors.sucessColor};
  color: white;

}
body .Toastify .Toastify__toast-container .Toastify__toast--error{
  background: ${colors.errorColor};
  color:black;
}
`;

export const Container = styled.section`
  max-width: 480px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
