import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import AllMembersComp from './members/AllMembers';
import MainComp from './MainPage';

ReactDOM.render(
  <BrowserRouter>
     <Switch>
      {/* <Route path="/movies" component={AllMoviesComp} />  */}
      {/* <Route path="/edit-movie/:id" component={EditMovieComp} />  */}
      {/* <Route path="/add-movie" component={AddMovieComp} />  */}

      <Route path="/members" component={AllMembersComp} /> 
      {/* <Route path="/edit-member/:id" component={EditMemberComp} /> 
      <Route path="/add-member" component={AddMemberComp} />   */}
      <Route path="/main" component={MainComp} />  


      <Route exact path="/" component={App} />  


    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
