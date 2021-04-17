import { useState, useEffect } from "react";
import moviesBL from '../utils/moviesUtils'


function EditMovieComp(props) {

  const [movID] = useState(props.match.params.id)
  const [movName, setMovName] = useState('');
  const [movPre, setMovPre] = useState('');
  const [movImg, setMovImg] = useState('');
  const [movGen, setMovGen] = useState([]);



  useEffect( () => {
   async function fetchData() {
  let result = await moviesBL.getMovie(movID);
  setMovName(result.data.name);
  setMovPre(result.data.premiered);
  setMovImg(result.data.image)
  setMovGen(result.data.genres)
   }
   fetchData();
  } , [movID])

 

  const UpdateMov = async (e) => 
  {
    e.preventDefault();
    let updatedMov = {name: movName, genres: movGen, premiered : movPre, image: movImg };
    let result = await moviesBL.updateMovie(movID , updatedMov);
    alert(result.data);
    props.history.push('/main/movies/all-movies')


  }

  const goBack = () => 
  {
    props.history.push('/main/movies/all-movies')

  }
  return (
    <div className="App">
      <h3>Edit Movie {sessionStorage["fullName"]}</h3>
    
    <form onSubmit={e => UpdateMov(e)}>
      Name: <input type="text" value={movName} onChange={ e => setMovName(e.target.value)} /> <br/>
      Premiered: <input type="text" value={movPre} onChange={ e => setMovPre(e.target.value)} /> <br/>
      Image Url: <input type="text" value={movImg} onChange={ e => setMovImg(e.target.value)} /> <br/>
      Genres: <input type="text" value={movGen} onChange={ e => setMovGen(e.target.value)} /> <br/>
      <input type="submit" value="Update" />
      <input type="button" value="Cancel" onClick={goBack} />
    </form>
    </div>
  );
}

export default EditMovieComp;
