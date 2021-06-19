import React from 'react';
import './Components.css';

const PortfolioCard = (props) => {
  return (
    <div className="Portfolio-card">
      <img className="Card-img" src={props.portfolio.mainImg} alt="main_img" />
      <p className="School">{props.portfolio.school}</p>
      <p className="Major">{props.portfolio.major}</p>
      <p className="Name">
        {props.portfolio.name}
        <span className="Year">{props.portfolio.year}</span>
      </p>
    </div>
  );
};

export default PortfolioCard;
