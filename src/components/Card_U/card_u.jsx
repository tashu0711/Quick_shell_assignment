// import React from 'react';
// import './card_u.css'; // Import the CSS file for styles

// const CardU = ({ userName, profilePicture, taskCount }) => {
//   return (
//     <div className="card-u">
//       <div className="card-u-profile">
//         <img src={profilePicture} alt="Profile" className="card-u-avatar" />
//         <span className="card-u-name">{userName}</span>
//       </div>
//       <div className="card-u-info">
//         <span className="card-u-task-count">{taskCount}</span>
//         <button className="card-u-add-btn">+</button>
//       </div>
//     </div>
//   );
// };

// export default CardU;


import React from 'react';
import './card_u.css'; // Import the CSS file for styles

const CardU = ({ userName, profilePicture, taskCount }) => {
  return (
    <div className="card-u">
      <div className="card-u-profile">
        <img src={profilePicture} alt="Profile" className="card-u-avatar" />
        <span className="card-u-name">{userName}</span>
      </div>
      <div className="card-u-info">
        <span className="card-u-task-count">{taskCount}</span>
        <button className="card-u-add-btn">+</button>
      </div>
    </div>
  );
};

export default CardU;
