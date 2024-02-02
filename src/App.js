import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BreedSelector from './components/BreedSelector';
import DogList from './components/DogList';
import CustomAppBar from './components/AppBar';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <CustomAppBar />
      <Routes>
        <Route path="/" element={<BreedSelector />} />
        <Route path="/dogs/:breedName" element={<DogList />} />
        <Route path="/services" element={<Services />}/>
      </Routes>
    </>
  );
};

export default App;

