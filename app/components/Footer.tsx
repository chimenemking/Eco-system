import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-auto text-center bg-slate-200 py-5 px-7 border-t">
      <small>&copy; 2024. All rights reserved</small>
    </footer>
  );
};

export default Footer;
