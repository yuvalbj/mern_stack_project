import './App.css';
import userBL from './utils/userUtils';
import { useState } from "react";

import {withRouter} from "react-router-dom";

function LoginComp(props) {
  const [userName , setUserName] = useState('');
  const [userPwd , setUserPwd] = useState('');
  const [userNotValid, setUserNotValid] = useState(false)

  const checkLogin = async (e) => 
  {
    e.preventDefault();
    let result = await userBL.isAllowedToLogin(userName, userPwd);


    if(result.allowedToLogin)
    {
      sessionStorage["fullName"] = result.fullName;
      props.history.push('/main')
    }
    else
    {
      setUserNotValid(true)
    }
  }

  return (
    <div className="App">
 <h1>Movies Subscriptions Web Site !!</h1>
<form onSubmit={e => checkLogin(e)}>
  User Name: <input type="text" onChange={e => setUserName(e.target.value)} /> <br/>
  Password: <input type="text" onChange={e => setUserPwd(e.target.value)} /> <br/>
    <input type="submit" value="Login" />
</form>
    <p style={{ visibility: userNotValid ? 'visible' : 'hidden' , color: 'red'}}>
      One of the values are wrong, pls try again 
    </p>

    </div>
  );
}

export default withRouter(LoginComp);
