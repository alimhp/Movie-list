import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="test"
        />
      </div>
    </div>
  );
};

export default Header;
