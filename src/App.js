import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters'

function App() {
  return (
    <div className="App bg-dark">
      <Header/>
      <Characters/>
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
