import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import GoalEdit from './components/pages/goals/GoalEdit'
import GoalNew from './components/pages/goals/GoalNew'
import Profile from './components/pages/users/Profile'
import ProfileEdit from './components/pages/users/ProfileEdit'
import UserNew from './components/pages/users/UserNew'
import UserLogin from './components/pages/users/UserLogin'
import NavBar from './components/partials/NavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/new' element={<UserNew />} />
          <Route path='/user/login' element={<UserLogin />} />
          <Route path='/user/:id' element={<Profile />} />
          <Route path='/user/:id/edit' element={<ProfileEdit />} />
          <Route path='/goal/new' element={<GoalNew />} />
          <Route path='/goal/:id/edit' element={<GoalEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
