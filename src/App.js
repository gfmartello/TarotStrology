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

// what to improve on:
// add modalities page

// how to put image in browser tab in react?
// how to put title of page in browser tab in react?
// deploying on netlify

// which items in header component need a key element to stop error from popping up in console?
// which items in my-card component need a key element to stop error from popping up in console?

function App() {
  function InfoPage () {
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;