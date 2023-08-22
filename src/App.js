import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import CardPage from './components/CardPage';
import Appointment from './components/Appointment';
import Chat from './components/Chat';
import Community from './components/Community';
import Guide1 from './components/Gude1';
import Date from './components/Date'
import Guide2 from './components/Guide2';
import Guide3 from './components/Guide3';
import Guide4 from './components/Guide4';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/cardpage/guide1'element={<Guide1/>}></Route>
      <Route path='/cardpage/guide2'element={<Guide2/>}></Route>
      <Route path='/cardpage/guide3'element={<Guide3/>}></Route>
      <Route path='/cardpage/guide4'element={<Guide4/>}></Route>
      <Route path='/cardpage'element={<CardPage />}></Route>
      <Route path='/chat'element={<Chat />}></Route>
      <Route path='/community'element={<Community />}></Route>
      <Route path='/appointment'element={<Appointment/>}></Route>
      
    </Routes>
 </BrowserRouter>
    </div>
  );
}
export default App;
