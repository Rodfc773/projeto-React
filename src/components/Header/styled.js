import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 1.8em 0 1.8em 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  a {
    color: #fff;
    margin: 0px 10px;
    font-weight: bold;
  }
  p {
    font-size: 20px;
    display: inline-block;
  }
`;
export const RightDiv = styled.div`
  width: 50%;
  text-align: right;
  padding: 0px 20px;
  margin: 0px 10px;
`;
