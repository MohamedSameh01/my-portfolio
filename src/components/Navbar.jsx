import Logo from "../assets/MohamedSamehLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center  ">
        <img className="w-20 cursor-pointer mx-2" src={Logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
        <a href="https://www.linkedin.com/in/mohamedsameh005/" >
          <FaLinkedin />
        </a>

        <a href="https://github.com/MohamedSameh01">
          <FaGithub />
        </a>

        <a href="https://www.instagram.com/mohamedsameh005/">
          <FaInstagram />
        </a>

        <a href="#">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
