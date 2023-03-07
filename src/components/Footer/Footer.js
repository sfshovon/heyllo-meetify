import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer footer-center bottom-0 bg-green-200 text-dark">
        <div className="my-3">
          <h1 className="text-2xl text-center"> &copy; {year} by Heyllo Alpha </h1>
        </div>
        
    </footer>
  );
};

export default Footer;