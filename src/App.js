import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Head from './components/head';
import Movies from './components/Secondlayer/Movies';
import Goat from './components/Goat/goat';
import Mainpage from './components/Mainpage';
import Ticket from './components/form';
import Signin from './components/signin';
import Event from './components/Event/event';
import Message from './components/message';
import Video from './components/video';

function App() {
  return (
   <>
  <Routes>
    <Route exact path='/'  element={<Mainpage />} />
    
    {/* <Route path='/BookMyShow' element={<Mainpage />} /> */}
    <Route path='/Movies' element={<Movies />} />
    <Route path='/Mainpage' element={<Mainpage />} />
    <Route path='/Goat' element={<Goat />}/>
    <Route path='/Video' element={<Video />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/Message' element={<Message />} />
    <Route path='/ticket' element={<Ticket />} />
    <Route path='/Event' element={<Event />} />
  </Routes>
   </>
  );
}

export default App;
