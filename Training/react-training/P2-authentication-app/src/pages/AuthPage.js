import AuthForm from '../components/Auth/AuthForm';

const AuthPage = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', color: 'green' }}>
        If you want create your own email and password use, Create new account
        Otherwise use existing email and password
        <div style={{color:'rebeccapurple'}}>
          ನಿಮ್ಮ ಸ್ವಂತ ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ರಚಿಸಲು ನೀವು ಬಯಸಿದರೆ, ಹೊಸ ಖಾತೆಯನ್ನು ರಚಿಸಿ
          ಇಲ್ಲದಿದ್ದರೆ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ಬಳಸಿ
        </div>
        <h2>Email: luckypujari5@gmail.com,  Password: 100200300</h2></h3>
      <AuthForm />
    </div>
  );

};

export default AuthPage;
