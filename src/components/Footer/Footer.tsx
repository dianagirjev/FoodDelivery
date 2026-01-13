import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center gap-5" id="footer">
      <div className="footer-content grid grid-cols-[2fr_1fr_1fr] gap-20">
        <div className="content-left flex flex-col gap-4">
          <img className="w-37.5" src={assets.logo} alt="Logo Img" />
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="socials flex gap-4 items-center">
            <img src={assets.facebook_icon} alt="Facebook Icon" />
            <img src={assets.twitter_icon} alt="Twitter Icon" />
            <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
          </div>
        </div>
        <div className="content-middle">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="content-right">
          <h4>GET IN TOUCH</h4>
          <ul>
            <li>
              <a href="#">+1-212-456-7890</a>
            </li>
            <li>
              <a href="#">contact@tomato.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
