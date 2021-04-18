import { useState, useEffect } from "react";
import membersBL from '../utils/membersUtils';


function EditMemberComp(props) {

  const [memID ] = useState(props.match.params.id)
  const [memName, setMemName] = useState('');
  const [memEmail, setMemEmail] = useState('');
  const [memCity, setMemCity] = useState('');


  
  useEffect(() => {
    let isMounted = true; 
    async function fetchData() {
      let result = await membersBL.getMember(memID);
      if(isMounted){
        setMemName(result.data.name);
        setMemEmail(result.data.email);
        setMemCity(result.data.city);
      }
    }
    fetchData();
    return  () => { isMounted = false };
  }, [memID])

  const UpdateMov = async (e) => 
  {
    e.preventDefault();
    let updatedMem = {name: memName, email: memEmail, city : memCity};
    let result = await membersBL.updateMem(memID , updatedMem);
    alert(result.data);
    props.history.push('/main/subs/all-members')

  }

  const goBack = () => 
  {
    props.history.push('/main/subs/all-members')

  }
  return (
    <div className="App">
      <h3>Edit Member {sessionStorage["fullName"]}</h3>
    
    <form onSubmit={e => UpdateMov(e)}>
      Name: <input type="text" value={memName} onChange={ e => setMemName(e.target.value)} /> <br/>
      Email: <input type="text" value={memEmail} onChange={ e => setMemEmail(e.target.value)} /> <br/>
      City: <input type="text" value={memCity} onChange={ e => setMemCity(e.target.value)} /> <br/>
      <input type="submit" value="Update" />
      <input type="button" value="Cancel" onClick={goBack} />
    </form>
    </div>
  );
}

export default EditMemberComp;
