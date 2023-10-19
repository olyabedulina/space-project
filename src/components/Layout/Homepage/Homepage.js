import React from 'react';
import Header from '../Header';
import Hero from '../../Hero';
import Main from '../Main';
import Card from '../../Card';
import Article from '../../Article';
import Footer from '../Footer';
import './styles.scss';

const Homepage = () => {
  const cards = [
    {
      id: 'id1',
      headingText: 'Move the borders of reality!',
      buttonText: 'Learn more',
      paragraphText: "Go on a space adventure - it's possible with us!",
    },
    {
      id: 'id2',
      headingText: 'Space is not just stars and planets',
      buttonText: 'Learn more',
      paragraphText: 'Go on a space adventure',
    },
    {
      id: 'id3',
      headingText: 'For those who dream of stars',
      buttonText: 'Learn more',
      paragraphText: 'Our offer: make your dream come true',
    },
    {
      id: 'id4',
      headingText: 'Fulfill your fantastic dreams',
      buttonText: 'Learn more',
      paragraphText: 'Space has never been so close',
    },
  ];
  const articles = [
    {
      id: 'article1',
      headingText: 'Embark on a space journey',
      buttonText: 'Read more',
      paragraphText:
        '<p>Travelling into space is one of the most exciting and unforgettable adventures that can change ' +
        'your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company ' +
        'is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space ' +
        'journey and see all the secrets of the universe. We guarantee that every moment in space will be filled ' +
        'with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your ' +
        'safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space ' +
        'excursions.</p>' +
        '<p>While the observation of objects in space, known as astronomy, predates reliable recorded history, it ' +
        'was the development of large and relatively efficient rockets during the mid-twentieth century that allowed ' +
        'physical space exploration to become a reality. Common rationales for exploring space include advancing ' +
        'scientific research, national prestige, uniting different nations, ensuring the future survival of ' +
        'humanity, and developing military and strategic advantages against other countries.</p>',
    },
  ];
  return (
    <>
      <Header />
      <Hero />
      <Main>
        <div className="main__content">
          {cards.map((item, index) => (
            <Card
              key={item.id}
              className={`card--main card-bg-${index + 2}`}
              headingText={item.headingText}
              handleButtonClick={() => null}
              buttonText={item.buttonText}
              buttonVariant="outline-primary"
              paragraphText={item.paragraphText}
            />
          ))}
        </div>
        {articles.map((item) => (
          <Article
            key={item.id}
            className="article--main"
            headingText={item.headingText}
            handleButtonClick={() => null}
            buttonText={item.buttonText}
            buttonVariant="outline-primary"
            paragraphText={item.paragraphText}
          />
        ))}
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
