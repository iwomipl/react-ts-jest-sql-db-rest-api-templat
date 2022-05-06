import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { UserView } from './views/UserView';

function App() {
  return (
    <main className="app">
        <Header/>
        <Routes>
            <Route path='/user' element={<UserView/>}></Route>
            <Route path='/product' element={<UserView/>}></Route>
            <Route path='/basket' element={<UserView/>}></Route>
        </Routes>

    </main>
  );
}

export default App;
