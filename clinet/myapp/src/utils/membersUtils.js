
import axios from 'axios';

const getAllMembers = ()=> 
{
    return axios.get("http://localhost:8000/api/members");
}

const getMember = (id)=> 
{
    return axios.get("http://localhost:8000/api/members/" + id);
}

const updateMem = (id , updatedMem)=> 
{
    return axios.put("http://localhost:8000/api/members/" + id , updatedMem);

}

const addMember = (newMem)=> 
{
    return axios.post("http://localhost:8000/api/members" , newMem);

}

const deleteMember = (id)=> 
{
    return axios.delete("http://localhost:8000/api/members/" + id);
}


export default {getAllMembers, getMember , updateMem , addMember , deleteMember};
