import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body'

const App = () => {
  return (
    <div className="App"> 
      <header className="App-header">
      <Header /> {/* Используем компонент Header */}
      </header>
      <body className="App-body">
        <Body />
      </body>
    </div>
  );
}



export default App;
