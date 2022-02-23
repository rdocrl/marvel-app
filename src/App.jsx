import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Menu';
import ComicsPage from './components/ComicsPage';
import CharactersPage from './components/CharactersPage';
import NotFound from './components/NotFound';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
