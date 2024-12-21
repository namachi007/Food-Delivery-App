import logoImg from "../../Images/logoImg.png";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="headingDiv">
      <div className="logoDiv">
        <img src={logoImg} className="logo" />
        <h3>YumRun</h3>
      </div>
      <div className="navItems">
        <ul>
          <li className="headerLink">
            <Link to="/">Home</Link>
          </li>
          <li className="headerLink">
            <Link to="/about">About Us</Link>
          </li>
          <li className="headerLink">
            <Link to="/contact">Conatct Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
