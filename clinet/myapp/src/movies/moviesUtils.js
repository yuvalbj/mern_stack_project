
import axios from 'axios';

const getAllMovies = ()=> 
{
    return axios.get("http://localhost:8000/api/movies");
}

const getMovie = (id)=> 
{
    return axios.get("http://localhost:8000/api/movies/" + id);
}

const updateMovie = (id , updatedMov)=> 
{
    return axios.put("http://localhost:8000/api/movies/" + id , updatedMov);

}

const addMovie = (newMov)=> 
{
    return axios.post("http://localhost:8000/api/movies" , newMov);

}

const deleteMovie = (id)=> 
{
    return axios.delete("http://localhost:8000/api/movies/" + id);
}

const searchMovie = async (str) =>
  {
    let resp = await axios.get("http://localhost:8000/api/movies");
    let allMovies = resp.data;
    let result = [];

    allMovies.forEach(mov => 
      {
        if(mov.name.includes(str))
        {
          result.push(mov)
        }
      })
     return result;
    }

export default {getAllMovies, getMovie , updateMovie , addMovie , deleteMovie, searchMovie};
