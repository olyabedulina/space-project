import React from 'react';
import './styles.scss';
import Container from '../Container';

const Main = ({ children }) => {
  return (
    <main className="main">
      <Container>
        <h2 className="heading">Offers</h2>
        {children}
      </Container>
    </main>
  );
};

export default Main;
