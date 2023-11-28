import Home from './pages/Home'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Diary from './pages/Diary'
import Develop from './pages/Develop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/diary' element={<Diary />}/>
          <Route path='/develop' element={<Develop />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
