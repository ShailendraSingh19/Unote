import React from "react";

const currentdate = new Date();
const currentyear = currentdate.getFullYear();
function Footer() {
  return <footer>Copyright@ {currentyear}</footer>;
}

export default Footer;
