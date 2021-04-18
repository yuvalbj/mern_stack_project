import Button from '@material-ui/core/Button';
import {Switch, Route} from 'react-router-dom'
import AddMemberComp from './AddMember';
import AllMembersComp from "./AllMembers";
import EditMemberComp from './EditMember';
import {useEffect} from 'react';

function MainSubsComp(props){

  useEffect(() => {
    props.history.push("/main/subs/all-members")
  
  },[props.history])

  const goToAddMovie = () => {
    props.history.push('/main/subs/add-member')
  }

 const showAllMembers =() => 
 {
   props.history.push("/main/subs/all-members")
 }

  return (
    <div className="App">
      <h3>Members - {sessionStorage["fullName"]}</h3>

      <nav>
      <Button onClick={showAllMembers}>All Members</Button> &nbsp;

        <Button onClick={goToAddMovie}>Add Member</Button>
      </nav>
  
  

  <Switch>
      <Route path="/main/subs/all-members" component={AllMembersComp} /> 
      <Route path="/main/subs/edit-member/:id" component={EditMemberComp} /> 
      <Route path="/main/subs/add-member" component={AddMemberComp} /> 
    </Switch>

    </div>
  );
}

export default MainSubsComp;
