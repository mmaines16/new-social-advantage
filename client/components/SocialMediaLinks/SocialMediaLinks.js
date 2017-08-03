import React, { PropTypes } from 'react';

// Import Style
import styles from './SocialMediaLinks.css';

export function SocialMediaLinks(props) { // eslint-disable-line no-unused-vars
  return (
    <div className={styles['sm-links']}>
      <a href="https://www.facebook.com/newsocialadvantage/"><img className={styles.icon} src="/resources/icons/social-media/white/facebook.png" alt="facebook" /></a>
      <a href="https://www.twitter.com/newsocialadvantage/"><img className={styles.icon} src="/resources/icons/social-media/white/twitter.png" alt="twitter" /></a>
    </div>
  );
}

SocialMediaLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    domain: PropTypes.string.isRequired,
    redirectUrl: PropTypes.string.isRequired,
  })).isRequired,
};

export default SocialMediaLinks;
