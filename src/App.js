import './App.scss';
import MainHeader from './components/MainHeader/MainHeader'
import SecondHeader from './components/SecondHeader/SecondHeader'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import News from './components/News/News';
import Spisok from './components/Spisok/Spisok';
import Authorization from './components/Authorization/Authorization';
import Premium from './components/Premuim/Premium';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div className="App"> 
      <div className='Headers'>
        <secondheader className="App-secondheader">
          <SecondHeader />
        </secondheader>
        <mainheader className="App-mainheader">
          <MainHeader />
        </mainheader>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/catalog/" element={<Catalog />} />
          <Route path="/news/" element={<News />} />
          <Route path="/spisok/" element={<Spisok />} />
          <Route path="/authorization/" element={<Authorization />} />
          <Route path="/premium/" element={<Premium />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}



export default App;
