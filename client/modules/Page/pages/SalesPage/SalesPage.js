import React, { PropTypes } from 'react';

// Import Components


function SalesPage(props, context) { // eslint-disable-line no-unused-vars
  return (<h1>Sales PAGE</h1>);
}

SalesPage.propTypes = {
  page: PropTypes.object.isRequired,
};

SalesPage.contextTypes = {
  router: React.PropTypes.object,
};

export default SalesPage;
