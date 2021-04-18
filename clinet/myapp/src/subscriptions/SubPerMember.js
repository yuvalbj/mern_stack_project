import { useState, useEffect } from "react";
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import subsBL from '../utils/subscriptionUtils';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10

  },

});

function SubPerMemberComp(props) {

  const classes = useStyles();

  const [memID] = useState(props.memId);
  const [subs, setSubs] = useState([]);
  const [relevantMovies, setRelevantMovies] = useState([]);
  const [isSubToNewMovieVisible, setIsSubToNewMovieVisible] = useState(false);
  const [newSubDate, setNewSubDate] = useState('');
  const [newMovId, setNewMovId] = useState('');

  useEffect(() => {
    async function fetchData() {
      let result = await subsBL.getSubsPerMemberID(memID);
        setSubs(result);
    }
    fetchData();
  }, [memID])
  
  const ShowHide = ()=>
  {
     setIsSubToNewMovieVisible(!isSubToNewMovieVisible);
    if(isSubToNewMovieVisible === false)
    {
      getMovies();
    }
  }

  const getMovies = async () => 
  {
    let anotherResult = await subsBL.getMoviesDidNotWatchedForMember(memID);
    setRelevantMovies(anotherResult);
  }

  const SaveNewSub = async (e)=>
  {
    e.preventDefault();
    let newSub = {member_id: memID, movie_id: newMovId, date: newSubDate};
    let result = await subsBL.addSub(newSub);
    alert(result.data);
  }


  return (

    <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
      Movies Watched:
        </Typography>
        <ul>
          {
            subs.map((sub) =>
              {
                return <li key={sub.id}> <Link to={"/main/movies/edit-movie/" + sub.movId}>{sub.movName}</Link>&nbsp;
                  {sub.date}</li>
              })
          }
        </ul>
   
        
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Button variant="contained" size="small" onClick={ShowHide}>
      Subscribe To a New Movie</Button>
    </CardActions>
    {isSubToNewMovieVisible? <div> 
      <h3>Add movie:</h3>

      <form onSubmit={ (e) => SaveNewSub(e)}>
        
    
      <Select value={newMovId} onChange={(e) => setNewMovId(e.target.value)}>
       {
         relevantMovies.map(mov => 
          {
            return <MenuItem value={mov._id} key={mov._id}> {mov.name} </MenuItem>
          })
       }
     </Select> &nbsp; 
    
<input type="date" onChange={e => setNewSubDate(e.target.value)}/>
  <br/> <br/>
 <input type="submit" value="Save" />
 <br/>  <br/>

      </form>
     

    </div> : <div>  </div>}
  </Card>


  );
}

export default withRouter(SubPerMemberComp) ;
