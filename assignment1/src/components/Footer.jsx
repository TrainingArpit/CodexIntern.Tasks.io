import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 mt-auto">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Built with  React & Tailwind [&copy;Arpit]
      </p>
    </footer>
  );
}

export default Footer;
