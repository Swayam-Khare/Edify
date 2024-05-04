import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AddQuestion from './views/AddQuestion';
import Signup from './views/Signup';
import Signin from './views/Signin';
import './App.css';
import Dashboard from './views/Dashboard';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddQuestion />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
