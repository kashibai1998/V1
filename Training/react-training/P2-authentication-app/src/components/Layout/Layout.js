import { Fragment } from 'react';

import MainNavigation from './MainNavigation';
import FooterNavigation from './FooterNavigation';

const Layout = (props) => {
  return (
    <Fragment style={{ backgroundColor: 'yellow' }}>
      <MainNavigation />
      <div>{props.children}</div>
      <FooterNavigation />
    </Fragment>
  );
};

export default Layout;
