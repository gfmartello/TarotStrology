import './App.scss';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Page from './pages/Page/Page';
import Header from './components/Header/Header';
import Planet from './components/Planets/Planet/Planet';
import MyCard from './pages/MyCard/MyCard';

// what to improve on:
// how can I stop page from shaking when changing browser width?
// how can I make the NavBar not push down the rest of the page, and make its height limited and scrollable?
// is it possible to link to hard-coded pages for planets and signs from dynamically rendered card info?
// should I start on the birthday form now or should I fix previous issues first?
// what resources are there that I can use to spruce up the design?

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
          <Route path='/planet/:planetId' element={<Planet />} />
          <Route path='/mycard' element={<MyCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;