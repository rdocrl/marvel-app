import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Menu';
import ComicsPage from './components/ComicsPage';
import CharactersPage from './components/CharactersPage';
import NotFound from './components/NotFound';
import ComicDetailsPage from './components/ComicDetailsPage';
import CharacterDetailsPage from './components/CharacterDetailsPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/" element={<ComicsPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/comics/:id" element={<ComicDetailsPage />} />
          <Route path="/characters/:id" element={<CharacterDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
