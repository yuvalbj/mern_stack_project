import Button from '@material-ui/core/Button';
import {Switch, Route} from 'react-router-dom'
import EditMovieComp from './EditMovie'
import AddMovieComp from './AddMovie';
import AllMoviesComp from './AllMovies';
import {useEffect} from 'react';

function MainMoviesComp(props){


useEffect(() => {
  props.history.push("/main/movies/all-movies")

}, [props.history])

  const goToAddMovie = () => {
    props.history.push('/main/movies/add-movie')
  }

 const showAllMovies =() => 
 {
   props.history.push("/main/movies/all-movies")
 }

  return (
    <div className="App">
      <h3>Movies - {sessionStorage["fullName"]}</h3>

      <nav>
      <Button onClick={showAllMovies}>All Movies</Button> &nbsp;

        <Button onClick={goToAddMovie}>Add Movie</Button>
      </nav>
  
  

  <Switch>
      <Route path="/main/movies/all-movies" component={AllMoviesComp} /> 
      <Route path="/main/movies/edit-movie/:id" component={EditMovieComp} /> 
      <Route path="/main/movies/add-movie" component={AddMovieComp} /> 
    </Switch>

    </div>
  );
}

export default MainMoviesComp;
