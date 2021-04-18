import { useState, useEffect } from "react";
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import subsBL from '../utils/subscriptionUtils';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10

  },

});

function SubPerMovieComp(props) {

  const classes = useStyles();

  const [movID] = useState(props.movId);
  const [subs, setSubs] = useState([]);


  useEffect(() => {
    let isMounted = true; 
    async function fetchData() {
      let result = await subsBL.getSubsPerMovieID(movID);
      if(isMounted){
        setSubs(result)
      }
    }
    fetchData();
    return  () => { isMounted = false };
    
  }, [movID])
  
  
  return (

    <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Subscription Watched:
        </Typography>
       
        <ul>
          {
            subs.map((sub) =>
              {
                return <li key={sub.id}> <Link to={"/main/subs/edit-member/" + sub.memId}> {sub.memName}</Link> &nbsp;
                  {sub.date}</li>
              })
          }
        </ul>
   
        
      </CardContent>
    </CardActionArea>
    <CardActions>
 
    </CardActions>
  </Card>


  );
}

export default withRouter(SubPerMovieComp) ;
