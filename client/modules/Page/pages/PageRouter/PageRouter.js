import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Pages to render
import OptinPage from '../OptinPage/OptinPage';
import SalesPage from '../SalesPage/SalesPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';
import UnSubPage from '../UnSubPage/UnSubPage';

// Import Actions
import { fetchPage } from '../../PageActions';


// Import Selectors
import { getPage } from '../../PageReducer';

class PageRouter extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPage(this.props.params.slug));
  }

  render() {
    let renderPage = <div>Page Not Found</div>;
    switch (this.props.page.type) {
      case 'optin':
        renderPage = <OptinPage page={this.props.page}>{this.children}</OptinPage>;
        break;
      case 'sales':
        renderPage = <SalesPage page={this.props.page}>{this.children}</SalesPage>;
        break;
      case 'thank-you':
        renderPage = <ThankYouPage page={this.props.page}>{this.children}</ThankYouPage>;
        break;
      case 'unsub':
        renderPage = <UnSubPage page={this.props.page} >{this.children}</UnSubPage>;
        break;
      default:
        renderPage = <div>Page Not Found</div>;
        break;
    }

    return (
      <div>
        {renderPage}
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PageRouter.need = [params => {
  return fetchPage(params.slug);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    page: getPage(state, props.params.slug),
  };
}

PageRouter.propTypes = {
  page: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object,
};

PageRouter.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PageRouter);
