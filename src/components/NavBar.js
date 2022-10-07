import { Link } from "react-router-dom";
import { FaBars, 
  FaTimes, 
  //FaSearch,
} from "react-icons/fa";
import { useRef } from "react";
import { useState, useEffect } from "react";
import "./NavBar.css"

function NavBar() {
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive-nav');
  }

  useEffect(() => { //see if its scroolled or not
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  return (
    <header>
      <nav ref={navRef} className={scrolled ? "scrolled" : ""}>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
        <Link to="/about" className="nav-link">About Tarot</Link>
        <Link to="/" className="nav-link">Home</Link>
      </nav>
      <button onClick={showNavBar} className="nav-btn">
        <FaBars />
      </button>
    </header>
  )
}

export default NavBar;