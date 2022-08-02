  import React from 'react';
  import {FaGithub, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa';

  function Footer() {
    return (
  <footer className="bg-dark text-center text-white fixed-bottom border-top border-light">
    <div className="container mt-3">
        <a href='https://github.com/sarangpidadi07' style={{color:'#ffffff'}}><FaGithub className='h2 ms-3 me-3'/></a>
        <a href='https://twitter.com/sarangpidadi07' style={{color:'#ffffff'}}><FaTwitter className='h2 ms-3 me-3'/></a>
        <a href='https://www.linkedin.com/in/sarang-pidadi-144160116/' style={{color:'#ffffff'}}><FaLinkedin className='h2 ms-3 me-3'/></a>
        <a href='https://www.instagram.com/sarangpidadi07/' style={{color:'#ffffff'}}><FaInstagram className='h2 ms-3 me-3'/></a>
    </div>
    <div className="text-center mt-1 mb-1">
    <span className="text-white fw-bold">&copy; S A R A N G P I D A D I 0 7 &nbsp;|&nbsp; T H U N D E R P A W S</span>
    </div>
  </footer>
    );
  }

  export default Footer;