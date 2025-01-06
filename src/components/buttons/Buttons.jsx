import './Buttons.css';

import LinkButton from './LinkButton.jsx';
import Github from '../../assets/github.svg';
import Facebook from '../../assets/facebook.svg';
import LinkedIn from '../../assets/linkedin.svg';
import OpenInNewTab from '../../assets/open-in-new-tab.svg';
import PropTypes from 'prop-types';

export function GithubButton({ className }) {
  return (
    <LinkButton
      url="https://github.com/TEKKSUNN"
      image={Github}
      altText="github"
      className={className}
    />
  );
}

export function FacebookButton({ className }) {
  return (
    <LinkButton
      url="https://www.facebook.com/emmanuelleu.tecson/"
      image={Facebook}
      altText="facebook"
      className={className}
    />
  );
}

export function LinkedInButton({ className }) {
  return (
    <LinkButton
      url="https://www.linkedin.com/in/emmanuel-leu-tecson-b80804331/"
      image={LinkedIn}
      altText="linked in"
      className={className}
    />
  );
}

export function SocialButtons({ buttonClassName }) {
  return (
    <div className="buttons">
      <GithubButton className={buttonClassName} />
      <FacebookButton className={buttonClassName} />
      <LinkedInButton className={buttonClassName} />
    </div>
  );
}

SocialButtons.propTypes = {
  buttonClassName: PropTypes.string,
};

export function OpenWebsiteButton({ websiteURL }) {
  return (
    <LinkButton
      url={websiteURL}
      image={OpenInNewTab}
      altText="open-in-new-tab"
      className="dev-link"
    />
  );
}

OpenWebsiteButton.propTypes = {
  websiteURL: PropTypes.string.isRequired,
};

export function SourceCodeButton({ sourceCodeURL }) {
  return (
    <LinkButton
      url={sourceCodeURL}
      image={Github}
      altText="source-code"
      className="dev-link"
    />
  );
}

SourceCodeButton.propTypes = {
  sourceCodeURL: PropTypes.string.isRequired,
};
