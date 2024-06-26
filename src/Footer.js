import React from 'react';
import './App.css';

function Footer() {
  const date = new Date();
  return (
    <footer>
      Date is {date.getDate()} {date.getFullYear()}
    </footer>
  );
}

export default Footer;
