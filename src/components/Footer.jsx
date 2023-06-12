import React from "react";

function Footer() {
  return (
    <footer className="text-white text-center p-5">
      <p>@2023 ItsMeHaBeeb | All rights reserved.</p>
      <p>
        <a href="https://www.youtube.com/@itsmehabeebs" className="fs-5 text-white text-decoration-none ms-4">
          <i className="fa fa-youtube-play"></i>
        </a>
        <a href="https://www.instagram.com/itsmehabeeb__" className="fs-5 text-white text-decoration-none ms-4">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://github.com/itsmehabeeb" className="fs-5 text-white text-decoration-none ms-4">
          <i className="fa fa-github"></i>
        </a>
        <a href="mailto:itsmehabeeb0@gmail.com" className="fs-5 text-white text-decoration-none ms-4">
          <i className="fa fa-envelope-o"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
