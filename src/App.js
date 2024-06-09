import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import { Route, Routes } from 'react-router-dom';
import Free from './pages/free/free';
import Market from './pages/market/market';
import Timer from './pages/timer/timer';
import Home from './pages/home/home';
import Restaurants from './pages/restaurants/restaurants';
import Week from './pages/restaurants/week';
import Scheduler from './pages/schduler/schduler';

function App() {
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/free' element={<Free/>}></Route>
      <Route path='/market' element={<Market/>}></Route>
      <Route path='/timer' element={<Timer/>}></Route>
      <Route path='/restaurants' element={<Restaurants/>}></Route>
      <Route path='/restaurants/week  ${item.name}' element={<Week/>}></Route>
      <Route path='/schduler' element={<Scheduler/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
