import React from 'react'
import "./Profiles.scss"
import worldSurf from "../../assets/images/WorldSurf.png"

const Profiles = (props) => {

  const { surfers } = props;
  const surferRankingArr = [];

  const surferJSX = surfers.map((surfer, key) => {
    surferRankingArr.push(surfer.surfingNumber, surfer.firstName);

    



    return (
      
      <div className="surfer">
        <img src={surfer.imgUrl} alt="" />
        <p className="surfer__name">{surfer.firstName} {surfer.lastName}</p>
        <p className="surfer__age"><strong>Age:</strong> {surfer.age}</p>
        <p className="surfer__age"><strong>Stance:</strong> {surfer.stance}</p>
        <p className="surfer__age"><strong>Height:</strong> {surfer.height}</p>
        <p className="surfer__age"><strong>Rookie Year:</strong> {surfer.rookieYear}</p>

      </div>
    );
  });

  return (

    <div className="profiles">
      <div class="profiles__header">
        <img src={worldSurf} alt="" />
        <h3>A list of the 2021 World Surf League Surfers</h3>
      </div>
      {surferJSX}
    </div>
  );
};

export default Profiles
