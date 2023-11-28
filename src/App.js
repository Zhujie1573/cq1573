import Home from './pages/Home'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Develop from './pages/Develop';
import ContactUsMain from './pages/ContactUsMain';
import HirePage from './pages/HirePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/hire' element={<HirePage />}/>
          <Route path='/develop' element={<Develop />}/>
          <Route path='/contactus' element={<ContactUsMain />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
