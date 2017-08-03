import React, { PropTypes } from 'react';

// Import Components


function UnSubPage(props, context) { // eslint-disable-line no-unused-vars
  return (<h1>Unsubscribe PAGE</h1>);
}

UnSubPage.propTypes = {
  page: PropTypes.object.isRequired,
};

UnSubPage.contextTypes = {
  router: React.PropTypes.object,
};

export default UnSubPage;
