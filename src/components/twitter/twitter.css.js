import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Twitter = styled.span`
  padding: 1rem 1rem;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  background-color: #008c72;
  border: black 5px solid;
  width: 40%;
  min-width: 280px;
  display: flex;
  flex-direction: column;

  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
