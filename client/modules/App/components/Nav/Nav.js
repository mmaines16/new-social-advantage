import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl'; // eslint-disable-line no-unused-vars
import Collapsible from 'react-collapsible';

import SocialMediaLinks from '../../../../components/SocialMediaLinks/SocialMediaLinks';

// Import Style
import styles from './Nav.css';

export function Nav(props, context) { // eslint-disable-line no-unused-vars
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );

  return (
    <div className={styles.nav}>
      <div className={styles['pre-nav']}>
        <SocialMediaLinks links={[{ domain: 'facebook', redirectUrl: 'https://facebook.com' }]} />
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" ><img src="../resources/img/site-logo.png" alt="New Social Advantage" /></Link>
        </h1>

        <div id="site-links" className={styles['site-links']}>
          <span className={styles['desktop-link']}><Link to="/"><h3>Route 1</h3></Link></span>
          <span className={styles['desktop-link']}><Link to="/"><h3>Route 2</h3></Link></span>
          <span className={styles['desktop-link']}><Link to="/"><h3>Route 3</h3></Link></span>
          <span className={styles['desktop-link']}><Link to="/"><h3>Route 4</h3></Link></span>
          <div className={styles['mobile-links']}>
            <Collapsible trigger="Menu">
              <div className={styles['mobile-link-container']} >
                <Link to="/">Route 1</Link>
                <Link to="/">Route 2</Link>
                <Link to="/">Route 3</Link>
                <Link to="/">Route 4</Link>
              </div>
            </Collapsible>
          </div>
        </div>

      </div>
    </div>
  );
}

Nav.contextTypes = {
  router: React.PropTypes.object,
};

Nav.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Nav;
