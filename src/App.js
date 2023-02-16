import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login';
import Categoris from './components/Categoris';
import Header from './components/Header';
import Welcome from './components/Welcome';
import ItemInfo from './components/ItemInfo';
import SideBar from './components/SideBar';
import Items from './components/Items';
import Signup from './components/Signup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/> 
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="Categories" element={<Categoris/>} />
          <Route path="Categories/:Items" element={<Items/> } />
          <Route path="Categories/:Items/:id" element={<ItemInfo /> } />

      </Routes>
  </BrowserRouter>

</div>
  );
}

export default App;
