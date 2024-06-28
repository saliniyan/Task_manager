import React from 'react';
import './App.css';

function Footer(props) {
  const date = new Date();
  return (
    <footer>
      Date is {date.getDate()} {date.getFullYear()}
      <br />
      Total list {props.len} {props.len===1?"item":"items"}
    </footer>
  );
}

export default Footer;
