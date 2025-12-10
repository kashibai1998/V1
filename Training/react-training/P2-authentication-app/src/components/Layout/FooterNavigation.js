import { Link } from 'react-router-dom';

import classes from './FooterNavigation.module.css';

const FooterNavigation = () => {

  return (
    <header className={classes.header}>
      <h3 style={{textAlign:'center'}}>Media Partner</h3>
          <div className={classes.spaceClass}>
            <a href='https://www.businesstoday.in/' className={classes.colorName}>News</a>
          </div>
          <div className={classes.spaceClass}>
            <a href='https://www.facebook.com/lucky.pujari.391/' className={classes.colorName}>Facebook</a>
          </div>
          <section className={classes.spaceClass}>
            <a href='https://www.instagram.com/luckypujari5/' className={classes.colorName}>Instgram</a>
          </section>
          <div className={classes.spaceClass}>
            <a href='https://www.youtube.com/channel/UCAIgdGr3s-txWyphThlBQaw' className={classes.colorName}>Youtube</a>
          </div>
          <div className={classes.spaceClass}>
            <a href='https://www.linkedin.com/in/lakkappa-pujari-222a83146/' className={classes.colorName}>LinkedIn</a>
          </div>
    </header>
  );
};

export default FooterNavigation;