import './App.scss';
import MainHeader from './components/MainHeader/MainHeader'
import SecondHeader from './components/SecondHeader/SecondHeader'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="App"> 
      <div className='Headers'>
        <secondheader className="App-secondheader">
          <SecondHeader /> {/* Используем компонент Header */}
        </secondheader>
        <mainheader className="App-mainheader">
          <MainHeader /> {/* Используем компонент Header */}
        </mainheader>
      </div>

      <body className="App-body">
        <Body />
      </body>
      
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}



export default App;
