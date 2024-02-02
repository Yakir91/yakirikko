import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faPaw,
  faNotesMedical,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import CustomBottomNavigation from "./Footer";
import axios from "axios";

const DogList = () => {
  const [selectedDog, setSelectedDog] = useState({});
  const params = useParams();
  const selectedDogId = params.breedName;
  const dogIcon = <FontAwesomeIcon icon={faDog} />;
  const pawIcon = <FontAwesomeIcon icon={faPaw} />;
  const healthIcon = <FontAwesomeIcon icon={faNotesMedical} />;
  const trophyIcon = <FontAwesomeIcon icon={faTrophy} />;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/dogs/${selectedDogId}`
        );
        setSelectedDog(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [setSelectedDog]);

  return (
    <div className="container">
      <div
        className="dog-image"
        style={{ backgroundImage: `url(${selectedDog.image})` }}
      >
        <div className="small-menu">{pawIcon} YakiRikko</div>
        <br></br>
        <h1 className="dog-breed">{selectedDog.breed}</h1>
      </div>
      <div className="dog-stats">
        <div className="stat">
          <h3>Family Type</h3>
          <span className="value">Dogs</span>
        </div>
        <div className="stat">
          <h3>Average Age</h3>
          <span className="value">{selectedDog.avgAge}</span>
        </div>
        <div className="stat">
          <h3>Average Weight</h3>
          <span className="value">{selectedDog.avgWeight}</span>
        </div>
        <div className="stat">
          <h3>Average Height</h3>
          <span className="value">{selectedDog.avgHeight}</span>
        </div>
      </div>
      <div className="dog-details">
        <div className="detail">
          <h1>{dogIcon} Description</h1>
          <p>{selectedDog.description}</p>
        </div>
        <div className="detail">
          <h1>{pawIcon} Qualities</h1>
          <p>{selectedDog.qualities}</p>
        </div>
        <div className="detail">
          <h1>{healthIcon} Health</h1>
          <p>{selectedDog.health}</p>
        </div>
        <div className="detail">
          <h1>{trophyIcon} Maintenance</h1>
          <p>{selectedDog.maintenance}</p>
        </div>
      </div>
      <div className="banner">
        <a href="/">
          <div className="banner-image"></div>
        </a>
      </div>
      <div className="footer" style={{ marginTop: "25px" }}>
        <CustomBottomNavigation />
      </div>
    </div>
  );
};

export default DogList;
