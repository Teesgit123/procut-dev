import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import Header 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element = { <Home /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
