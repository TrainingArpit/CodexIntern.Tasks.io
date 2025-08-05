import React from "react";

function Header() {
  return (
    <header className="bg-black shadow-md pt-4 pb-4">
      <div className="pl-4 pr-4 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-white text-3xl font-black tracking-tight">
            Assignment1
          </span>
        </div>
        <nav className="text-white space-x-6 text-lg hidden sm:block">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Users</a>
          <a href="#" className="hover:underline">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
