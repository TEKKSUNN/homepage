import './Buttons.css';

import LinkButton from './LinkButton.jsx';
import Github from '../../assets/github.svg';
import Facebook from '../../assets/facebook.svg';
import LinkedIn from '../../assets/linkedin.svg';

export function GithubButton() {
  return (
    <LinkButton
      url="https://github.com/TEKKSUNN"
      image={Github}
      altText="github"
    />
  );
}

export function FacebookButton() {
  return (
    <LinkButton
      url="https://www.facebook.com/emmanuelleu.tecson/"
      image={Facebook}
      altText="facebook"
    />
  );
}

export function LinkedInButton() {
  return (
    <LinkButton
      url="https://www.linkedin.com/in/emmanuel-leu-tecson-b80804331/"
      image={LinkedIn}
      altText="linked in"
    />
  );
}
