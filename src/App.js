import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import GoalEdit from './components/pages/goals/GoalEdit'
import GoalNew from './components/pages/goals/GoalNew'
import Profile from './components/pages/users/Profile'
import ProfileEdit from './components/pages/users/ProfileEdit'
import UserNew from './components/pages/users/UserNew'
import UserLogin from './components/pages/users/UserLogin'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route to='/' element={<Home />} />
          <Route to='/user/new' element={<UserNew />} />
          <Route to='/user/login' element={<UserLogin />} />
          <Route to='/user/:id' element={<Profile />} />
          <Route to='/user/:id/edit' element={<ProfileEdit />} />
          <Route to='/goal/new' element={<GoalNew />} />
          <Route to='/goal/:id/edit' element={<GoalEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
