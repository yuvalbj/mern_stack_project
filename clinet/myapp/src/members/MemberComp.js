import { useState, useEffect } from "react";
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import membersBL from '../utils/membersUtils';
import SubPerMember from "../subscriptions/SubPerMember";
import subBL from '../utils/subscriptionUtils'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10

  },

});

function MemberComp(props) {

  const classes = useStyles();

  const [memID] = useState(props.memId);
  const [member, setMember] = useState({});

  // useEffect( () => {
  //   async function fetchData() {

  // let result = await membersBL.getMember(memID);
  // setMember(result.data)
  //   }
  //   fetchData();
  // }, [memID])


  useEffect(() => {
    let isMounted = true; 
    async function fetchData() {
      let result = await membersBL.getMember(memID);
      if(isMounted){
        setMember(result.data)
      }
    }
    fetchData();
    return  () => { isMounted = false };
  }, [memID])



  const goToEdit = ()=>
  {
    props.history.push("/main/subs/edit-member/" + memID)
  } 

  const deleteMember = async()=>
  {
    let result = await membersBL.deleteMember(memID);
    let result2 = await subBL.deleteSubPerMember(memID)
    alert(result.data);
    window.location.reload();
  }

  return (

    <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {member.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Email: {member.email} <br/>
        City: {member.city}
   
        
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button onClick={goToEdit} size="small" color="primary">
        Edit
      </Button>
      <Button size="small" color="primary" onClick={deleteMember}>
        Delete 
      </Button>
    </CardActions>

    <SubPerMember memId={memID}/>

  </Card>


  );
}

export default withRouter(MemberComp) ;
