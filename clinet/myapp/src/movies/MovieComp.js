import { useState, useEffect } from "react";
import moviesBL from '../utils/moviesUtils'
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SubPerMovie from "../subscriptions/SubPerMovie";
import subBL from '../utils/subscriptionUtils';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 10

  },
  media: {
    height: 250,
    width: 200
  },
});

function MovieComp(props) {

  const classes = useStyles();

  const [movID, setMovID] = useState(props.movId);
  const [movie, setMovie] = useState({});
  const [movGen , setMovGen] = useState([]);





  useEffect(() => {
    let isMounted = true; 
    async function fetchData() {
      let result = await moviesBL.getMovie(movID);
      if(isMounted){
        setMovie(result.data)
        setMovGen(result.data.genres)
      }
    }
    fetchData();
    return  () => { isMounted = false };
  }, [movID])


  const goToEdit = ()=>
  {
    props.history.push("/main/movies/edit-movie/" + movID)
  } 

  const deleteMov = async()=>
  {
    let result = await moviesBL.deleteMovie(movID);
    let result2 = await subBL.deleteSubPerMovie(movID)
    alert(result.data);
    window.location.reload();
  }

  return (
<div className="App">
    <Card className={classes.root}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {movie.name}, {movie.premiered}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Genres: &nbsp;
       
       {movGen.map((gen, index)=> 
       {
         return <span key={index}>{gen} </span> 
       }) } 
        
        </Typography>

        <CardMedia
        component="img"
        className={classes.media}
        image={movie.image}
        title={movie.name}
      />

      <SubPerMovie movId={movID}/>
      </CardContent>
   
    <CardActions>
      <Button onClick={goToEdit} size="small" color="primary">
        Edit
      </Button>
      <Button size="small" color="primary" onClick={deleteMov}>
        Delete 
      </Button>
    </CardActions>
  </Card>
  </div>
  );
}

export default withRouter(MovieComp);
