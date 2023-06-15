import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/Page/Page';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;