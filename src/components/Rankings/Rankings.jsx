import React from "react";
import "./Rankings.scss";
import worldSurf from "../../assets/images/WorldSurf.png";

const Rankings = (props) => {
  const { surfers } = props;
  const surferRankingArr = [];

  const surferJSX = surfers.map((surfer, key) => {
    surferRankingArr.push(surfer.surfingNumber, surfer.firstName);

    return (
      <div className="surfer">
        <img src={surfer.imgUrl} alt="" />
        <p className="surfer__name">
          {surfer.firstName} {surfer.lastName}
        </p>
        <p>
          <strong>Ranking: </strong>
          {surfer.surfingNumber}
        </p>
      </div>
    );
  });

  return (
    <div className="rankings">
      <div class="rankings__header">
        <img src={worldSurf} alt="" />
        <h3>A list of the 2021 World Surf League Surfers</h3>
      </div>
      {surferJSX}
    </div>
  );
};

export default Rankings;
