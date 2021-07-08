import React from 'react';
import './Components.css';
import { AiTwotoneLike } from 'react-icons/ai';

const PortfolioCard = (props) => {
  return (
    <div className="Portfolio-card">
      <img className="Card-img" src={props.portfolio.mainImg} alt="main_img" />
      <div className="Like-icon">
        <AiTwotoneLike style={{ marginTop: '.4rem' }} />{' '}
        <span style={{ fontSize: '.9rem', marginBottom: '0 auto' }}>
          {props.portfolio.likes}
        </span>
      </div>
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
