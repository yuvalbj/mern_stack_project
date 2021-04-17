import { useState } from "react";
import membersBL from '../utils/membersUtils';


function AddMemberComp(props) {

  const [memName, setMemName] = useState('');
  const [memEmail, setMemEmail] = useState('');
  const [memCity, setMemCity] = useState('');

  const AddMem = async (e) => 
  {
    e.preventDefault();
    let newMem = {name: memName, email: memEmail, city : memCity };
    let result = await membersBL.addMember(newMem);
    alert(result.data);
    props.history.push('/main/subs/all-members')
  }

  const goBack = () => 
  {
    props.history.push('/main/subs/all-members')
  }
  return (
    <div className="App">
      <h3>Add New Movie {sessionStorage["fullName"]}</h3>
    
    <form onSubmit={e => AddMem(e)}>
      Name: <input type="text"  onChange={ e => setMemName(e.target.value)} /> <br/>
      Email: <input type="text"  onChange={ e => setMemEmail(e.target.value)} /> <br/>
      City: <input type="text"  onChange={ e => setMemCity(e.target.value)} /> <br/>
      <input type="submit" value="Add" />
      <input type="button" value="Cancel" onClick={goBack} />
    </form>
    </div>
  );
}

export default AddMemberComp;
