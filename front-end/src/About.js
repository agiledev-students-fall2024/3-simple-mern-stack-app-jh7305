import React, { useEffect, useState } from 'react';
import './About.css'

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Fetch the About Us data from the back-end
    fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error fetching About Us data:', error));
  }, []);

  return (
    <div className="about-page">
      {aboutData ? (
        <>
          <h1>About Us</h1>
          <h2>{aboutData.name}</h2>
          <p>{aboutData.bio}</p>
          <img src={aboutData.imageUrl} alt="Profile" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
