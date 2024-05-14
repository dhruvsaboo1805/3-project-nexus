import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Aboutus from './pages/AboutUs/Aboutus';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import './App.css';
import './index.css';

function App() {
  return (
    <div className='App'>
       <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/about-us" element = {<Aboutus></Aboutus>}></Route>
        <Route path = "/services" element = {<Services></Services>}></Route>
        <Route path = "/contact" element = {<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
