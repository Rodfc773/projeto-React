import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 1.8em 0 1.8em 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  a {
    color: #fff;
    margin: 0px 10px;
    font-weight: bold;
  }
`;
export const LeftDiv = styled.div`
  width: 80%;
`;
