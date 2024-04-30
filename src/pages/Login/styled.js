import styled from 'styled-components';

export const Title = styled.h1`
  background-color: ${(props) => (props.isRed ? 'red' : 'green')};
  color: #000;

  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragraph = styled.p`
  font-size: 80px;
`;
