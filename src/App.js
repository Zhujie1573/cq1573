import Home from './pages/Home'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Develop from './pages/Develop';
import ContactUsMain from './pages/ContactUsMain';
import HirePage from './pages/HirePage';
import DutyPage from './pages/DutyPage';
import ProductPage from './pages/ProdudctPage';
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
          <Route path='/duty' element={<DutyPage />}/>
          <Route path='/duty1' element={<DutyPage />}/>
          <Route path='/duty2' element={<DutyPage />}/>
          <Route path='/duty3' element={<DutyPage />}/>
          <Route path='/product' element={<ProductPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
