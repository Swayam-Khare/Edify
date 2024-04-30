import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import AddQuestion from './views/AddQuestion';
import Signup from './views/Signup';
import Signin from './views/Signin';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddQuestion />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
