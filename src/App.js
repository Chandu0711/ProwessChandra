import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Scoreboard from './component/Scoreboard';
import User from './component/User';
import Challanges from './component/Challanges';


function App() {
  return (
   <div  class="app">
     <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home></Home>}> </Route> 
     <Route path="/user" element={<User></User>}> </Route>
     <Route path="/scoreboard" element={<Scoreboard></Scoreboard>}> </Route>
     <Route path="/challanges" element={<Challanges></Challanges>}> </Route> 
     <Route path="/login" element={<Login></Login>}> </Route>
     <Route path="/signup" element={<Signup></Signup>}> </Route>
    </Routes> 
    </BrowserRouter>

    </div>
  );
}

export default App;
