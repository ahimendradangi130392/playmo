import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
     <Header/>
     <div style={{paddingTop:'0px'}}><Home/></div>
    </div>
  );
}

export default App;
