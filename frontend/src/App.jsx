import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
