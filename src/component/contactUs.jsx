import React from "react";
const Contactus = () => {
  return (
    <div className="contactusStyle">
      <h1 className="contact"> Contact Us</h1>
      <p className="conpara">Have any questions ? Feel free to contact us.</p>
      <div className="input">
        <input placeholder="Enter Your Name"></input>
        <input placeholder="Enter Your Phone"></input>
        <input placeholder=" Enter Your Email"></input>
        <input placeholder="Enter Your Subject"></input>
        <input className="ba" placeholder="Message"></input>
      </div>
    </div>
  );
};
export default Contactus;
