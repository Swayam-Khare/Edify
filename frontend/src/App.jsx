import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import AddQuestion from './views/AddQuestion';
import Signup from './views/Signup';
import Signin from './views/Signin';
import Dashboard from './views/Dashboard';
import EditProfile from './views/EditProfile';
import ProtectedRoute from './components/ProtectedRoute';
import CreateTest from './views/CreateTest';
import TestList from './views/TestList';
import TestReport from './views/TestReport';
import Test from './views/Test';

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

          <Route path="/show-tests" element={
            <ProtectedRoute>
              <TestList />
            </ProtectedRoute>
          } />

          <Route path="/report/:testId" element={
            <ProtectedRoute>
              <TestReport />
            </ProtectedRoute>
          } />

          <Route path="/test" element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          } />

          <Route path="/create" element={
            <ProtectedRoute>
              <CreateTest />
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
