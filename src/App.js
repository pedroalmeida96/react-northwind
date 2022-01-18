import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CategoriesList from './components/CategoriesList';
import AddCategory from './components/AddCategory';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route component={CategoriesList} path="/" />
            <Route component={AddCategory} path="/add" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
