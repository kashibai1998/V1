import { useContext, useRef, useState } from 'react';

import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-content';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginContext = useContext(AuthContext);

  const history = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log('called submit handler', email, password);

    var url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-njEVBWCKH84x_DL1Oks9eBZt_4zKVSI'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-njEVBWCKH84x_DL1Oks9eBZt_4zKVSI'
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          // console.log(res.json());
          return res.json();
        }
        else {
          return res.json().then(data => {
            // console.log(data);
            // alert(data.error.message)
            let errorMsg = "authentication failed";
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        // console.log(data)
        loginContext.login(data.idToken);
        history('/profile');
      }).catch(err => {
        alert(err.message);
      })

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
