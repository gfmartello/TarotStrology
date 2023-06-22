import './App.scss';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Page from './pages/Page/Page';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Planet from './components/Planet/Planet';
import Sign from './components/Sign/Sign';
import MyCard from './pages/MyCard/MyCard';

// what to improve on:
// priorities:
// stop header from moving entire page component down

// which items in header component need a key element to stop error from popping up in console?
// which items in my-card component need a key element to stop error from popping up in console?
// add element categories to json
// add pictures and in-depth descriptions to planet and sign pages and style them better

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
          <Route path='/mycard' element={<MyCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;