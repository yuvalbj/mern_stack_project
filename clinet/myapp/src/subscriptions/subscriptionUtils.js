
import axios from 'axios';

const getAllSubscription = ()=> 
{
    return axios.get("http://localhost:8000/api/subscriptions");
}

const getSub = (id)=> 
{
    return axios.get("http://localhost:8000/api/subscriptions/" + id);
}


const addSub = (newSub)=> 
{
    return axios.post("http://localhost:8000/api/subscriptions" , newSub);

}


const getSubsPerMovieID = async (id) =>
  {
    let resp = await axios.get("http://localhost:8000/api/subscriptions");
    let allSubs = resp.data;
    let result = [];

    let resp1 = await axios.get("http://localhost:8000/api/members");
    let allMembers = resp1.data;

    allSubs.forEach(sub => 
      {
        if(sub.movie_id === id)
        {

           allMembers.forEach(mem => 
            {
              if(mem._id === sub.member_id)
              {
                  let obj = { id: sub._id , date : sub.date ,memId : mem._id, memName: mem.name}
                  result.push(obj);
              }
            })
        }
      })
     return result;
    }


  
const getSubsPerMemberID = async (id) =>
{
  let resp = await axios.get("http://localhost:8000/api/subscriptions");
  let allSubs = resp.data;
  let result = [];

  let resp1 = await axios.get("http://localhost:8000/api/movies");
  let allMovies = resp1.data;

  allSubs.forEach(sub => 
    {
      if(sub.member_id === id)
      {

        allMovies.forEach(mov => 
          {
            if(mov._id === sub.movie_id)
            {
                let obj = { id: sub._id , date : sub.date , movId : mov._id, movName: mov.name}
                result.push(obj);
            }
          })
      }
    })
   return result;
  }


  const deleteSubPerMovie = async (id) =>
  {
    let resp = await axios.get("http://localhost:8000/api/subscriptions");
    let allSubs = resp.data;
    
    allSubs.forEach(sub => 
      {
        if(sub.movie_id === id)
        {

          axios.delete("http://localhost:8000/api/subscriptions/" + sub._id).then(x => x.data)
        }
      })

     return "Deleted";
    }

  
    const deleteSubPerMember = async (id) =>
    {
      let resp = await axios.get("http://localhost:8000/api/subscriptions");
      let allSubs = resp.data;
      
      allSubs.forEach(sub => 
        {
          if(sub.member_id === id)
          {
  
            axios.delete("http://localhost:8000/api/subscriptions/" + sub._id).then(x => x.data)
            
          }
        })
  
       return "Deleted";
      }

export default {getAllSubscription, getSubsPerMovieID , getSubsPerMemberID, deleteSubPerMovie,deleteSubPerMember };
