import './DevCard.css';
import { OpenWebsiteButton, SourceCodeButton } from '../buttons/Buttons.jsx';
import LinkButton from '../buttons/LinkButton.jsx';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

function DevCard({ title, desc, imageURL, websiteURL, sourceCodeURL }) {
  const { ref, inView } = useInView({
    threshold: 0.25, // Trigger when 25% is visible
    triggerOnce: true, // Trigger only once
  });
  console.log(inView);

  return (
    <div className={`dev-card${inView ? ' animate' : ''}`} ref={ref}>
      <h2 className="dev-card-title">{title}</h2>
      <LinkButton
        url={websiteURL}
        image={imageURL}
        altText="image"
        className="image-link"
      />
      <p className="dev-card-desc">{desc}</p>
      <div className="buttons">
        <SourceCodeButton sourceCodeURL={sourceCodeURL} />
        <OpenWebsiteButton websiteURL={websiteURL} />
      </div>
    </div>
  );
}

// Define prop types
DevCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  websiteURL: PropTypes.string.isRequired,
  sourceCodeURL: PropTypes.string.isRequired,
};

export default DevCard;
