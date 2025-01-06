import './Footer.css';
import { SocialButtons } from '../buttons/Buttons.jsx';
import Phone from '../../assets/phone.svg';
import Email from '../../assets/email.svg';

function Footer() {
  return (
    <footer>
      <h1 className="title">Contact Me</h1>
      <p className="desc">
        Please get in touch with us if you think our work could be mutually
        beneficial.
      </p>
      <p className="address">
        1234 Random Road
        <br />
        Random Town, Narnia 12345
      </p>
      <div className="phone info">
        <img src={Phone} alt="phone icon" />
        <p className="icon-desc">123-456-7890</p>
      </div>
      <div className="email info">
        <img src={Email} alt="email icon" />
        <p className="icon-desc">emmanuelleutecson@gmail.com</p>
      </div>
      <SocialButtons buttonClassName="footer-button" />
    </footer>
  );
}

export default Footer;
