import React from 'react';
import Scrollspy from 'react-scrollspy';
import $ from 'jquery';

const Header = () => {
  const sections = [
    { href: 'top', text: 'David Ko' },
    { href: 'about-me', text: 'About Me' },
    { href: 'skills', text: 'Skills' },
    { href: 'projects', text: 'Projects' },
    { href: 'contact', text: 'Contact' },
  ];

  const scrollTo = (element) => {
    if (element === '#top') {
      return $('html,body').animate(
        { scrollTop: $(`${element}`).offset().top },
        500,
      );
    }
    $('html,body').animate(
      { scrollTop: $(`${element}`).offset().top + 1 },
      500,
    );
  };
  const handleClick = (event) => scrollTo(event.target.getAttribute('href'));

  const generateHeaderText = (sections, className) =>
    sections.map((section, index) => (
      <h3
        key={section + index}
        className={'header-item-text ' + className}
        onClick={handleClick}
        href={`#${section.href}`}
      >
        {section.text}
      </h3>
    ));

  return (
    <Scrollspy
      items={sections.map((section) => section.href)}
      currentClassName="is-current"
      className="header"
    >
      {generateHeaderText([sections[0]], 'mr-auto')}
      {generateHeaderText(sections.slice(1))}
    </Scrollspy>
  );
};

export default Header;
