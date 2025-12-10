import classes from './StartingPageContent.module.css';
import { useNavigate } from 'react-router-dom';
import ceo from '../../assests/images/ceo1.jpeg';
import coFounder from '../../assests/images/amit.jpeg';

import agriclture from '../../assests/images/agriclture.jpeg';
import education from '../../assests/images/education.jpeg';
import itSolutions from '../../assests/images/it-solutions.jpeg';
import stockMarket from '../../assests/images/stock-market.jpeg';


const StartingPageContent = () => {
  const history = useNavigate();

  const loginPage = () => {
    history('/auth')
  }

  return (
    <section className={classes.starting}>
      <div>
        <img src='https://img.freepik.com/free-vector/business-people-icon-set_1284-20749.jpg?w=2000' width={'100%'} height={'100%'} />
      </div><br />
      <p className={classes.homeDesc}>The Lucky Private Limitted is a Karnataka company headquartered in Bangalore.
        Established in 2023, It is Karnataka's small scale company, with products and
        services in over 31 districts in Karnataka, and operations in 31 districts
        across Karnataka. Acknowledged as the founder of the L.B.P Group,
        Lucky Private Limitted company operates independently under the guidance
        and supervision of its own board of directors and shareholders.
        Philanthropic trusts control over 100% of the L.B.P share holders.
        And we are providding all kind of Agricltures,Stock Market,Education solutions </p>
      <br />
      <p className={classes.homeDescKannada}>
        ಲಕ್ಕಿ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪ್ರಧಾನ ಕಚೇರಿಯನ್ನು ಹೊಂದಿರುವ ಕರ್ನಾಟಕ ಕಂಪನಿಯಾಗಿದೆ. 2023 ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ
        ಇದು ಕರ್ನಾಟಕದ ಸಣ್ಣ ಪ್ರಮಾಣದ ಕಂಪನಿಯಾಗಿದ್ದು, ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಸೇವೆಗಳನ್ನು
        ಹೊಂದಿದೆ ಮತ್ತು ಕರ್ನಾಟಕದಾದ್ಯಂತ 31 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಕಾರ್ಯಾಚರಣೆ ನಡೆಸುತ್ತಿದೆ. L.B.P ಗ್ರೂಪ್‌ನ ಸ್ಥಾಪಕ ಎಂದು
        ಗುರುತಿಸಲ್ಪಟ್ಟ ಲಕ್ಕಿ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಕಂಪನಿಯು ತನ್ನದೇ ಆದ ನಿರ್ದೇಶಕರು ಮತ್ತು ಷೇರುದಾರರ ಮಾರ್ಗದರ್ಶನ
        ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆಯಲ್ಲಿ ಸ್ವತಂತ್ರವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಲೋಕೋಪಕಾರಿ ಟ್ರಸ್ಟ್‌ಗಳು 100% L.B.P ಷೇರುದಾರರ ಮೇಲೆ ನಿಯಂತ್ರಣವನ್ನು ಹೊಂದಿವೆ.
        ಮತ್ತು ನಾವು ಎಲ್ಲಾ ರೀತಿಯ ಕೃಷಿ, ಷೇರು ಮಾರುಕಟ್ಟೆ, ಶಿಕ್ಷಣ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತಿದ್ದೇವೆ</p>
      <br /><br />

      <h2>Our Services</h2>
      <div>
        <h3>1.Education</h3>
        <img src={education} width={'340px'} height={'340px'} />
      </div>
      <div>
        <h3>2.Agricltures</h3>
        <img src={agriclture} width={'340px'} height={'340px'} />
      </div>
      <div>
        <h3>3.Stock Market</h3>
        <img src={stockMarket} width={'340px'} height={'340px'} />
      </div>
      <div>
        <h3>4.It Solutions</h3>
        <img src={itSolutions} width={'340px'} height={'340px'} />
      </div><br /><br />


      <img src="https://media.istockphoto.com/id/1131821723/vector/click-here-button-with-hand-pointer-clicking-click-here-web-button-isolated-website-buy-or.jpg?s=170667a&w=0&k=20&c=mVK637gpqrJdlaIYJkEF-dHfagvWwPGsXLhvvQSiEW8=" width={'40%'} height={'40%'} onClick={loginPage} style={{ cursor: 'pointer' }} />
      <br /><br />

      <div style={{ margin: '5px' }}>
        <img src={ceo} width={'200px'} height={'200px'} className={classes.avatarImg} />
        <h4 style={{ margin: '0px' }}>Founder and CEO</h4>
        <h5 style={{ margin: '0px', fontFamily: 'italic' }}>L B Pujari</h5>
        <p>I will always choose a lazy person to do a difficult job, because, he will find an easy way to do it... @Jai Anjaneya</p>
        <p>ನಾನು ಯಾವಾಗಲೂ ಕಷ್ಟದ ಕೆಲಸವನ್ನು ಮಾಡಲು ಸೋಮಾರಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತೇನೆ, ಏಕೆಂದರೆ ಅವನು ಅದನ್ನು ಮಾಡಲು ಸುಲಭವಾದ ಮಾರ್ಗವನ್ನು ಕಂಡುಕೊಳ್ಳುತ್ತಾನೆ ... @ ಜೈ ಆಂಜನೇಯ</p>
      </div>
      <div style={{ margin: '5px' }}>
        <img src={coFounder} width={'200px'} height={'200px'} className={classes.avatarImg} />
        <h4 style={{ margin: '0px' }}>Co-Founder and MD</h4>
        <h5 style={{ margin: '0px', fontFamily: 'italic' }}>Amit Verma</h5>
        <p>Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.</p>
        <p>ಯಶಸ್ಸು ಕ್ರಿಯೆಯೊಂದಿಗೆ ಸಂಪರ್ಕ ಹೊಂದಿದೆ ಎಂದು ತೋರುತ್ತದೆ. ಯಶಸ್ವಿ ಜನರು ಚಲಿಸುತ್ತಲೇ ಇರುತ್ತಾರೆ. ಅವರು ತಪ್ಪುಗಳನ್ನು ಮಾಡುತ್ತಾರೆ, ಆದರೆ ಅವರು ಬಿಡುವುದಿಲ್ಲ.</p>
      </div>
    </section>
  );
};

export default StartingPageContent;
