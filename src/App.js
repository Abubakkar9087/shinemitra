import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Price from './component/Price';
import Features from './component/Features';
import Solution from './component/Solution';
import Contact from './component/Contact';
import Blog from './component/Blog';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/price' element={<Price />} />
          <Route path='/feature' element={< Features/>} />
          <Route path='/solution' element={< Solution/>} />
          <Route path='/blog' element={< Blog/>} />
          <Route path='/contact' element={< Contact/>} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
