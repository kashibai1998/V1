import classes from './ProfileForm.module.css';
import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-content';

const ProfileForm = () => {

  const changePasswordRef = useRef();
  const passContext = useContext(AuthContext);

  const passwordReset = (event) => {
    event.preventDefault();
    const changePassword = changePasswordRef.current.value;

        var  url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA-njEVBWCKH84x_DL1Oks9eBZt_4zKVSI'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        idToken: passContext.token,
        password: changePassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        // if (res.ok) {
        //   return res.json();
        // }
        // else {
        //   return res.json().then(data => {
        //     let errMsg = "Password error";     
        //     throw new Error(errMsg);
        //   })
        // }
    })

  }
  return (
    <form  className={classes.form} onSubmit={passwordReset}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={changePasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
