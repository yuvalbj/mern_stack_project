import { useState , useEffect } from "react";
import MemberComp from "./MemberComp";
import membersBL from '../utils/membersUtils';

function AllMembersComp(props){

  const [allMembers, SetAllMembers] = useState([]);


  useEffect( () => {
    async function fetchData() {
    let result = await membersBL.getAllMembers();
    SetAllMembers(result.data);
    }
    fetchData();
  }, [])


  return (
    <div className="App">
  

      {
        allMembers.map(mem => 
          {
            return <MemberComp key={mem._id} memId={mem._id}></MemberComp>
          })
      }

    </div>
  );
}

export default AllMembersComp;
