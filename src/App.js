import { Routes , Route } from 'react-router'

import UserLoginPage from './components/Login'
import UserRegister from './components/Register'
import DashBoardPage from './pages/DashboardPage'
import ProfilePage from './pages/ProfilePage'




import './App.css';
import Landing from './pages/Landing'




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/'  element={<Landing/>} />
        <Route path='/dashboard'  element={<DashBoardPage/>} />
        <Route path='/profile'  element={<ProfilePage/>} />
        <Route path='/login'  element={<UserLoginPage/>} />
        <Route path='/register'  element={<UserRegister/>} />

      </Routes>







    </div>
  );
}

export default App;
