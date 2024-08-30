import React from "react";
import { pencil } from "../assets/icons";
import { useLocation } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <header>
      <nav className='container'>
        <div className='flex items-center justify-center gap-2'>
          <img src={pencil} alt='pencil' className='w-9' />
          <h1 className='text-center text-5xl tracking-wider font-semibold underline'>
            {title}
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
