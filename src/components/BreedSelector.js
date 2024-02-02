import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BreedSelector = () => {
  const navigate = useNavigate();
  const [dogBreeds, setDogBreed] = useState([]);
  useEffect(() => {
    getData().then((response) => {
      setDogBreed([...response.data]);
    });
  }, [setDogBreed]);

  const getData = async () => await axios.get("http://localhost:5000/api/dogs");

  const handleBreedSelection = (event, selectedOption) => {
    if (selectedOption) {
      navigate(`/dogs/${selectedOption.breed}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        backgroundImage: 'url(https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>Get Information About A Dog Breed</h1>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={dogBreeds}
        getOptionLabel={(option) => option.breed}
        sx={{ width: 600 }}
        renderInput={(params) => (
          <TextField {...params} label="Select A Breed" />
        )}
        onChange={handleBreedSelection}
        renderOption={(props, option) => <div {...props}>{option.breed}</div>}
      />
    </div>
  );
};

export default BreedSelector;
