import React from 'react'
import Login from "./views/Login";
import Users from "./views/Users";
import Register from "./views/Register";
import Notfound from "./views/Notfound";
import Home from "./views/Home";

import { AnimatePresence } from 'framer-motion';

import {
  Route,
  Routes,
  useLocation
} from 'react-router-dom'


function App() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </AnimatePresence>


  );
}

export default App;