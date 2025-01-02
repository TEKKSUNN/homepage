import PropTypes from 'prop-types';

function LinkButton({ url, image, altText, className = 'link-button' }) {
  return (
    <>
      <a
        className={className}
        rel="noreferrer noopener"
        target="_blank"
        href={url}
      >
        <img
          src={image}
          alt={altText + `${altText && ', '}image of link button`}
        />
      </a>
    </>
  );
}

// Define prop types
LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkButton;
