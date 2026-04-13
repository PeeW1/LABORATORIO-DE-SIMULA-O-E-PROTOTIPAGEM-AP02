import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Components/Auth';
import Main from './Components/Main';
import Menu from './Components/Menu';
import UserPage from './Components/UserPage';
import Services from './Components/Services';


function App() {
  return (
    <BrowserRouter basename="/LABORATORIO-DE-SIMULACAO-E-PROTOTIPAGEM-AP02">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
