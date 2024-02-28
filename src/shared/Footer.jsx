import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <p className="copy">
          &copy; {new Date().getFullYear()} 
           ระบบจองห้องปฎิบัติการ สาขาเทคโนโลยีธุรกิจดิจิทัล
        </p>
      </footer>
    </div>
  );
};

export default Footer;
