import React from 'react';
import Card from '../Card';
import Container from '../Layout/Container';
import './styles.scss';

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Card
          headingTag="h1"
          className="card--hero"
          headingText={'Discover the vast expanses of <em>space</em>'}
          handleButtonClick={() => null}
          buttonText={'Learn more'}
          buttonSize={'lg'}
          paragraphText={'Where the possibilities are <em>endless</em>!'}
        />
        <div className="hero__decoration" aria-hidden="true">
          <div className="hero__decoration-objects" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
