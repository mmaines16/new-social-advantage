import React, { PropTypes } from 'react';

// Import Components

// Import Style
import styles from './OptinPage.css';

function OptinPage(props, context) { // eslint-disable-line no-unused-vars
  let optinHTML = (<div className={styles.demoButton}>Get The Bait Now</div>);

  if (props.page.pixels && props.page.pixels.marketHero && props.page.pixels.marketHero.optinHTML) {
    optinHTML = props.page.pixels.marketHero.optinHTML;
  }


  return (
    <div className={styles['optin-page']}>
      <h1>{props.page.title.toUpperCase()}</h1>
      <div className={styles['page-headers']}>
        <h3 className={styles.preheader}>{props.page.content.preheader ? props.page.content.preheader : ''}</h3>
        <h1 className={styles.header}>{props.page.content.header ? props.page.content.header : ''}</h1>
        <h3 className={styles.postheader}>{props.page.content.postheader ? props.page.content.postheader : ''}</h3>
      </div>

      <div className={styles.optinHtml}>
        {optinHTML}
      </div>
    </div>
  );
}

OptinPage.propTypes = {
  page: PropTypes.object.isRequired,
};

OptinPage.contextTypes = {
  router: React.PropTypes.object,
};

export default OptinPage;
