
import axios from 'axios';

const getAllUsers = ()=> 
{
    return axios.get("http://localhost:8000/api/users");
}

const isAllowedToLogin = async (usrName, pwd)=> 
{

  let result = await axios.get("http://localhost:8000/api/users");
  let allUsers = await result.data;
  
  let users = allUsers.filter(usr =>  usr.username === usrName && usr.password === pwd)
    if(users.length > 0)
    {
      let isAllowed = {allowedToLogin : true, fullName : users[0].full_name}
      return isAllowed;
    }
    else
    {
      let isAllowed = {allowedToLogin : false, fullName : null}

      return isAllowed;
    }
    

}

export default {getAllUsers,isAllowedToLogin};
