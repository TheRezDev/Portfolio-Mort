import React, { useState } from 'react';
// import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
// import Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';




const MobileNav = () => {
  return (
    <nav>
      {/* nav open button */}
      <div className="text-3xl cursor-pointer">
        <CgMenuRight/>
      </div>
      {/* menu */}
      <div className="absolute top-0 right-0 z-20 w-full h-screen max-w-xs bg-white shadow-2xl">
        {/* icon */}
        <div>icon</div>
        {/* menu list */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
