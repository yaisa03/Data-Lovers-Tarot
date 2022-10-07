import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2022 Yaisa Arteaga. All rights reserved.</p>
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/yaisa-arteaga/"><img src={navIcon1} alt="Linkedin" /></a>
        <a href="https://github.com/yaisa03"><img src={navIcon2} alt="Github" /></a>
        <a href="https://www.instagram.com/lovely_yaisa/"><img src={navIcon3} alt="Instagram" /></a>
      </div>
    </footer>
  )
}

export default Footer