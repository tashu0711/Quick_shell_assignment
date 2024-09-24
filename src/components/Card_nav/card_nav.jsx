import React from 'react';
import './card_nav.css';

const CardNav = () => {
  return (
    <div className="card-nav">
      <div className="card-header">
        <h3>Task Title</h3>
        <span className="task-number">#CAM-1</span>
      </div>
      <div className="card-content">
        <p>Task Description: This task is related to feature request for UI updates.</p>
      </div>
      <div className="card-footer">
        <button className="status-button in-progress">In Progress</button>
        <span className="assigned-to">Assigned to: John Doe</span>
      </div>
    </div>
  );
};

export default CardNav;
