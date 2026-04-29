import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export const Headers = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleButtonToggle = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    const handleClose = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    const handleScrollOrResize = () => setShow(false);

    document.addEventListener("mousedown", handleClose);
    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      document.removeEventListener("mousedown", handleClose);
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1><span style={{color:"#3a4ed5"}}>G</span>lobal<span style={{color:"#3a4ed5"}}>A</span>tlas</h1>
            </NavLink>
          </div>

          <nav ref={menuRef} className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" onClick={() => setShow(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setShow(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" onClick={() => setShow(false)}>
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setShow(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button ref={buttonRef} onClick={handleButtonToggle}>
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
