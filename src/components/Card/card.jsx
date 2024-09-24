import React from 'react';
import './card.css';

const Card = ({ id, title, logo, status, type }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="task-id">{id}</p>
        <img src={logo} alt="User Avatar" className="user-avatar" />
      </div>
      <h2 className="task-title">{title}</h2>
      <div className="task-info">
        {!status ? <span className='icon'>O</span> : <span className="icon">⚠️</span>}
        <span className="feature-request">{type}</span>
      </div>
    </div>
  );
};

export default  Card;