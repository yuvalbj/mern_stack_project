import { useState , useEffect } from "react";
import MovieComp from "./MovieComp";
import moviesBL from '../utils/moviesUtils'
import Button from '@material-ui/core/Button';


function AllMoviesComp(props){

  const [allMovies, SetAllMovies] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');


   useEffect( () => {
    async function fetchData() {
      let result = await moviesBL.getAllMovies();
       SetAllMovies(result.data);
    }
    fetchData();

}, [])

const searchForMovie = async (e) => 
{
  e.preventDefault();
  let result = await moviesBL.searchMovie(searchPhrase);
  SetAllMovies(result);
}

  return (
    <div className="App">
       <form onSubmit={e => searchForMovie(e)}>
        Search: <input type="text" onChange={e => setSearchPhrase(e.target.value)} /> &nbsp;
        <Button type="submit">Find</Button>
      </form>

      {
        allMovies.map(mov => 
          {
            return <MovieComp key={mov._id} movId={mov._id}></MovieComp>
          })
      }

    </div>
  );
}

export default AllMoviesComp;
