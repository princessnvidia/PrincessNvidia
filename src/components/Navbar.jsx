import logo from "../assets/powered3.svg";

export default function Navbar() {
  return (
    <nav className="nav">
        <img className="logoImage" src={logo} alt="PrincessNvidia" />

      <div className="navLinks">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
