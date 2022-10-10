import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './components/pages/Home'
import GoalEdit from './components/pages/goals/GoalEdit'
import GoalNew from './components/pages/goals/GoalNew'
import Profile from './components/pages/users/Profile'
import ProfileEdit from './components/pages/users/ProfileEdit'
import UserNew from './components/pages/users/UserNew'
import UserLogin from './components/pages/users/UserLogin'
import NavBar from './components/partials/NavBar'

function App() {
  const [currentUser,setCurrentUser] =useState (" ")
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/user/new' element={<UserNew
           currentUser={currentUser} setCurrentUser={setCurrentUser} />} />


          <Route path='/user/login' element={<UserLogin
           currentUser={currentUser} setCurrentUser={setCurrentUser} />} />

          <Route path='/user/:id' element={<Profile 
          currentUser={currentUser} setCurrentUser={setCurrentUser} />} />

          <Route path='/user/:id/edit' element={<ProfileEdit 
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
