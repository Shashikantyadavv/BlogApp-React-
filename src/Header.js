import React from "react";
import { FaLaptop, FaTractor, FaMobileAlt } from "react-icons/fa";
import useWindowSize from './hooks/useWindowSize';
const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTractor />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
