import './App.scss';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Page from './pages/Page/Page';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Planet from './components/Planet/Planet';
import Sign from './components/Sign/Sign';
import Element from './components/Element/Element';
import Modality from './components/Modality/Modality';
import MyCard from './pages/MyCard/MyCard';
import Consultations from './pages/Consultations/Consultations';
import Footer from './components/Footer/Footer';

function App() {
  function InfoPage() {
    let { userId } = useParams()
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/:userId' element={<InfoPage />} />
          <Route path='/card/:cardId' element={<Card />} />
          <Route path='/planet/:planetId' element={<Planet />} />
          <Route path='/sign/:signId' element={<Sign />} />
          <Route path='/element/:elementId' element={<Element />} />
          <Route path='/modality/:modalityId' element={<Modality />} />
          <Route path='/mycard' element={<MyCard />} />
          <Route path='/consultations' element={<Consultations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;