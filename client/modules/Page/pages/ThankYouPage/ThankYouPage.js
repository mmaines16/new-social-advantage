import React, { PropTypes } from 'react';

// Import Components


function ThankYouPage(props, context) { // eslint-disable-line no-unused-vars
  return (<h1>Thank You PAGE</h1>);
}

ThankYouPage.propTypes = {
  page: PropTypes.object.isRequired,
};

ThankYouPage.contextTypes = {
  router: React.PropTypes.object,
};

export default ThankYouPage;
