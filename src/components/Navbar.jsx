import styles from "./Navbar.module.css";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarCustom}`}>
      <div className="container-fluid">
        <span className={`navbar-brand ${styles.logo}`}>
          <img
            src="icon.png" 
            alt="logo"
            width="40"
            height="35"
            className="me-2 rounded-circle"
          />
          TODO!
        </span>
        <button
          className={`btn ${styles.themeToggle}`}
          onClick={handleThemeToggle}
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
