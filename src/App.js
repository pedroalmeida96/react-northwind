import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CategoriesList from './components/CategoriesList';
import AddCategory from './components/AddCategory';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/home" component={CategoriesList} />
        <Route path="/add" component={AddCategory} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
