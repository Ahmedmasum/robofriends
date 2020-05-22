import React from "react";

const Footer = () => {
  const current = new Date();
  const New = current.getFullYear();
  return <h2>Ⓒ By AhmedMasum {New}</h2>;
};
export default Footer;
