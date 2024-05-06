import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AddQuestion from './views/AddQuestion';
import Signup from './views/Signup';
import Signin from './views/Signin';
import Dashboard from './views/Dashboard';
import EditProfile from './views/EditProfile';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddQuestion />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
