import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Components/Auth';
import Main from './Components/Main';
import Menu from './Components/Menu';
import UserPage from './Components/UserPage';
import Services from './Components/Services';
import AdmPage from './Components/AdmPage';


function App() {
  return (
    <BrowserRouter basename="/LABORATORIO-DE-SIMULA-O-E-PROTOTIPAGEM-AP02">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AdmPage" element={<AdmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
