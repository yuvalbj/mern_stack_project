import LoginComp from './LoginPage';
import {Switch, Route} from 'react-router-dom'

import Button from '@material-ui/core/Button';
import MainMoviesComp from './movies/MainMovies';
import MainSubsComp from './members/MainSubs';
import {useEffect} from 'react';

function MainComp(props) {

  useEffect(() => {
    props.history.push('/main/movies')

  }, [])

  const navToAllMovies = ()=> 
{
  props.history.push('/main/movies')

}

const navToAllMembers = ()=> 
{
  props.history.push('/main/subs')

}

const logOut = ()=> 
{
  props.history.push('/')
}
  return (
    
    <div className="App">
<h2>Movies Subscription WebSite</h2>
<nav>
 <Button variant="contained" onClick={navToAllMovies}>Movies</Button> &nbsp;
 <Button variant="contained" onClick={navToAllMembers}>Subscription</Button> &nbsp;
 <Button variant="contained" onClick={logOut}>Log Out</Button>

</nav>

       <Switch>
      <Route path="/main/movies" component={MainMoviesComp} /> 
      <Route path="/main/subs" component={MainSubsComp} /> 
      <Route exact path="/" component={LoginComp} />  
       </Switch>




    </div>
  );
}

export default MainComp;
