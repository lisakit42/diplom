import React from 'react';
import './App.scss';
import MainHeader from './components/MainHeader/MainHeader';
import SecondHeader from './components/SecondHeader/SecondHeader';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import News from './components/News/News';
import Spisok from './components/Spisok/Spisok';
import Authorization from './components/Authorization/Authorization';
import Premium from './components/Premium/Premium';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import SearchPage from './components/SearchPage/SearchPage';
import BethovenLunnayaSonata from './components/Products/Free/BethovenLunnayaSonata/BethovenLunnayaSonata';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';
import Creator from './components/Creator/Creator';

import MozartPianoConcerto21 from './components/Products/Paid/MozartPianoConcerto21/MozartPianoConcerto21';
import GaspariniAdoramusTe from './components/Products/Paid/GaspariniAdoramusTe/GaspariniAdoramusTe';
import BoccheriniSonataG5 from './components/Products/Paid/BoccheriniSonataG5/BoccheriniSonataG5';
import BeethovenFurElise from './components/Products/Paid/BeethovenFurElise/BeethovenFurElise';
import MocartMalenkayaNochnayaSerenada from './components/Products/Paid/MocartMalenkayaNochnayaSerenada/MocartMalenkayaNochnayaSerenada';
import RachmaninovPianoConcerto2 from './components/Products/Paid/RachmaninovPianoConcerto2/RachmaninovPianoConcerto2';
import BrahmsHungarianDance5 from './components/Products/Paid/BrahmsHungarianDance5/BrahmsHungarianDance5';
import ChaykovskyVremenaGoda from './components/Products/Free/ChaykovskyVremenaGoda/ChaykovskyVremenaGoda';
import ChaykovskySwanLake from './components/Products/Free/ChaykovskySwanLake/ChaykovskySwanLake';

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
          <Route path="/registration/" element={<Registration />} />
          <Route path="/premium/" element={<Premium />} />
          <Route path="/searchpage/" element={<SearchPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/creator/" element={<Creator />} />

          <Route path='/catalog/bethovenlunnayasonata/' element={<BethovenLunnayaSonata />} />
          <Route path='/catalog/mozartpianoconcerto21/' element={<MozartPianoConcerto21 />} />
          <Route path='/catalog/gaspariniadoramuste/' element={<GaspariniAdoramusTe />} />
          <Route path='/catalog/beethovenfurelise/' element={<BeethovenFurElise />} />
          <Route path='/catalog/chaykovskyswanlake/' element={<ChaykovskySwanLake />} />
          <Route path='/catalog/chaykovskyvremenagoda/' element={<ChaykovskyVremenaGoda />} />
          <Route path='/catalog/boccherinisonatag5/' element={<BoccheriniSonataG5 />} />
          <Route path='/catalog/brahmsHungariandance5/' element={<BrahmsHungarianDance5 />} />
          <Route path='/catalog/mocartMalenkayanochnayaserenada/' element={<MocartMalenkayaNochnayaSerenada />} />
          <Route path='/catalog/rachmaninovpianoconcerto2/' element={<RachmaninovPianoConcerto2 />} />

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
