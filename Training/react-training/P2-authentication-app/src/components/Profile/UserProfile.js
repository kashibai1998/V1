// import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import ProfileForm from '../profile-form/api-call/FetchCall';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h2>Please submit the form, our support agent will assist you based on your business requirment.</h2>
      <h2 style={{color:'rebeccapurple'}}>ದಯವಿಟ್ಟು ಫಾರ್ಮ್ ಅನ್ನು ಸಲ್ಲಿಸಿ, ನಿಮ್ಮ ವ್ಯಾಪಾರದ ಅಗತ್ಯತೆಯ ಆಧಾರದ ಮೇಲೆ ನಮ್ಮ ಬೆಂಬಲ ಏಜೆಂಟ್ ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತಾರೆ.</h2>
      <ProfileForm/>
      {/* <ProfileForm /> */}
    </section>
  );
};

export default UserProfile;
