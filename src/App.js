import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BreedSelector from './components/BreedSelector';
import DogList from './components/DogList';
import CustomAppBar from './components/AppBar';

const App = () => {
  return (
    <>
      <CustomAppBar />
      <Routes>
        <Route path="/" element={<BreedSelector />} />
        <Route path="/dogs/:breedName" element={<DogList />} />
        <Route path="/services" />
      </Routes>
    </>
  );
};

export default App;

