
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ModalLogin from './components/ModalLogin';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import RequireAuth from './Routes/RequireAuth';
function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* Private Route */}
        <Route path='/profile'
          element={
            <RequireAuth redirectTo={'/'}>
              <Profile />
            </RequireAuth>
          } />


      </Routes>
      <ModalLogin />
    </main>
  );
}

export default App;
