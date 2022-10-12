import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useState , useEffect} from 'react';
import jwt_decode from "jwt-decode"

import Home from './components/pages/Home'
import GoalEdit from './components/pages/goals/GoalEdit'
import GoalNew from './components/pages/goals/GoalNew'
import Profile from './components/pages/users/Profile'
import ProfileEdit from './components/pages/users/ProfileEdit'
import UserNew from './components/pages/users/UserNew'
import UserLogin from './components/pages/users/UserLogin'
import NavBar from './components/partials/NavBar'


function App() {

  const [currentUser,setCurrentUser] =useState (null)
    // useEffect -- if the user navigates away form the page, we will log them back in
    useEffect(() => {
      // check to see if token is in storage
      const token = localStorage.getItem('jwt')
      if (token) {
        // if so, we will decode it and set the user in app state
        setCurrentUser(jwt_decode(token))
      } else {
        setCurrentUser(null)
      }
      
    }, []) // happen only once
    // console.log(currentUser)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/user/new' element={<UserNew
           currentUser={currentUser} setCurrentUser={setCurrentUser} />} />


          <Route path='/user/login' element={<UserLogin
           currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          
          {/* if user is logged in then sends to profile if not then directs to login page */}
          <Route path='/user/profile' 
            element={ currentUser ? <Profile 
            currentUser={currentUser} setCurrentUser={setCurrentUser} /> 
            : <Navigate to = "/user/login"/> } /> 

          <Route path='/user/edit' element={<ProfileEdit 
          currentUser={currentUser} setCurrentUser={setCurrentUser} />} />

          <Route path='/goal/new' element={<GoalNew 
          currentUser={currentUser} setCurrentUser={setCurrentUser} />} />


          <Route path='/goal/:id/edit' element={<GoalEdit 
          currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
