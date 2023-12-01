import Home from './pages/Home'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Develop from './pages/Develop';
import ContactUsMain from './pages/ContactUsMain';
import HirePage from './pages/HirePage';
import DutyPage from './pages/DutyPage';
import ProductPage from './pages/ProdudctPage';
import DaquPage from './pages/DaquPage';
import GuojiaoPage from './pages/GuojiaoPage';
import JdzPage from './pages/JdzPage';
import ZgpwPage from './pages/ZgpwPage';
import HyPage from './pages/HyPage';
import HgPage from './pages/HeyGuysPage';
import ZsdqPage from './pages/ZsdqPage';
import TrdcPage from './pages/TrdcPage';
import TrtcPage from './pages/TrtcPage';
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
          <Route path='/daqu' element={<DaquPage />}/>
          <Route path='/guojiao1573' element={<GuojiaoPage />}/>
          <Route path='/otherProduct' element={<Develop />}/>
          <Route path='/jdz1573' element={<JdzPage />}/>
          <Route path='/zgpw1573' element={<ZgpwPage />}/>
          <Route path='/hy568' element={<HyPage />}/>
          <Route path='/HeyGuys' element={<HgPage />}/>
          <Route path='/zisha-daqu' element={<ZsdqPage />}/>
          <Route path='/diancang' element={<TrdcPage />}/>
          <Route path='/tiancheng' element={<TrtcPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
