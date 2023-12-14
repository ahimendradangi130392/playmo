import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login';
import MobileRegister from './pages/loginWithMobile';
import RegisterProfile from './pages/registerProfile';
function App() {
  return (<>
     {/* <div className="App">
      <Header/>
      <div style={{paddingTop:'0px'}}><Home/></div>
     </div> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/mobile-register" element={<MobileRegister/>} />
        <Route path="/Profile-add" element={<RegisterProfile/>} />
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
