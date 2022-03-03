import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Menu';
import NotFound from './components/NotFound';
import ComicDetailsPage from './components/ComicDetailsPage';
import CharacterDetailsPage from './components/CharacterDetailsPage';
import FavoritesPage from './components/FavoritesPage';
import ResourcesPage from './components/ResourcesPage';
import { resourceTypes } from './constants';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route
            path="/comics"
            element={<ResourcesPage type={resourceTypes.COMIC} orderByValue="issueNumber" />}
          />
          <Route
            path="/"
            element={<ResourcesPage type={resourceTypes.COMIC} orderByValue="issueNumber" />}
          />
          <Route
            path="/characters"
            element={<ResourcesPage type={resourceTypes.CHARACTER} orderByValue="name" />}
          />
          <Route path="/comics/:id" element={<ComicDetailsPage />} />
          <Route path="/characters/:id" element={<CharacterDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
