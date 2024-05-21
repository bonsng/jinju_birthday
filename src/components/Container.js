// src/components/Container.js
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 21rem;
    padding-bottom: 5rem;
  }
`;

export default Container;
