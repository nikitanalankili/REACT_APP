import React from 'react';
import nikitaImage from './nikita.jpg';
import "../css/AllCss.css"

const Home = () => {
  return (
    <div>
      <h1 id="homename">
        NIKITA NALANKILLI
      </h1>
      <img src={nikitaImage} alt="Profile of Nikita Nalankilli" id='image'/>
    </div>
  );
};

export default Home;
