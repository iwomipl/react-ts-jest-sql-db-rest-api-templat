import React from 'react';
import { Header } from './components/Header/Header';
import {RegisterForm} from "./components/RegisterForm/RegisterForm";
import {Route, Routes} from "react-router-dom";
import {UserView} from "./views/UserView";
import {ProductView} from "./views/ProductView";
import {BasketView} from "./views/BasketView";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {Logout} from "./components/Logout/Logout";

import './App.css';


function App() {
  return (
    <main className="app">
        <Header/>
        <Routes>
            <Route path='/user' element={<UserView/>}/>
            <Route path='/products' element={<ProductView/>}/>
            <Route path='/basket' element={<BasketView/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/logout' element={<Logout/>}/>
        </Routes>
    </main>
  );
}

export default App;
