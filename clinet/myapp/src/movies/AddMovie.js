import { useState } from "react";
import moviesBL from '../utils/moviesUtils'


function AddMovieComp(props) {

  const [movName, setMovName] = useState('');
  const [movPre, setMovPre] = useState('');
  const [movImg, setMovImg] = useState('');
  const [movGen, setMovGen] = useState([]);

  const AddMov = async (e) => 
  {
    e.preventDefault();
    let newMov = {name: movName, genres: movGen, premiered : movPre, image: movImg };
    let result = await moviesBL.addMovie(newMov);
    alert(result.data);
    props.history.push('/main/movies/all-movies')
  }

  const goBack = () => 
  {
    props.history.push('/main/movies/all-movies')
  }
  return (
    <div className="App">
      <h3>Add New Movie {sessionStorage["fullName"]}</h3>
    
    <form onSubmit={e => AddMov(e)}>
      Name: <input type="text"  onChange={ e => setMovName(e.target.value)} /> <br/>
      Premiered: <input type="text"  onChange={ e => setMovPre(e.target.value)} /> <br/>
      Image Url: <input type="text"  onChange={ e => setMovImg(e.target.value)} /> <br/>
      Genres: <input type="text" onChange={ e => setMovGen(e.target.value)} /> <br/>
      <input type="submit" value="Add" />
      <input type="button" value="Cancel" onClick={goBack} />
    </form>
    </div>
  );
}

export default AddMovieComp;
