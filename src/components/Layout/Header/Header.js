import React from 'react';
import Nav from '../../Nav';
import Logo from '../../Logo';
import Container from '../Container';
import './styles.scss';

const Header = () => {
  const links = [
    {
      id: '0',
      label: 'Home',
      href: '/',
      icon: null,
    },
    {
      id: '1',
      label: 'Products',
      href: '/',
      icon: null,
    },
    {
      id: '3',
      label: 'Cart',
      href: '/',
      icon: 'cart',
    },
  ];
  return (
    <header className="header">
      <Container>
        <Logo />
        <Nav links={links} />
      </Container>
    </header>
  );
};

export default Header;
