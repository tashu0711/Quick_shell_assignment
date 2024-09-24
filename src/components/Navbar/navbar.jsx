// import React, { useState } from 'react';
// import './navbar.css';
// import CardNav from '../Card_nav/card_nav'; // Import CardNav component

// const Navbar = () => {
//   const [isCardVisible, setIsCardVisible] = useState(false);

//   const handleDisplayClick = () => {
//     setIsCardVisible(!isCardVisible); // Toggle card visibility
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           Navbar
//         </div>
//         <div className="navbar-options">
//           <button className="display-button" onClick={handleDisplayClick}>
//             Display
//           </button>
//         </div>
//       </div>
//       {isCardVisible && <CardNav />} {/* Show card when button is clicked */}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import './navbar.css';

// const Navbar = () => {
//   const [isCardVisible, setIsCardVisible] = useState(false);

//   const handleDisplayClick = () => {
//     setIsCardVisible(!isCardVisible); // Toggle dropdown visibility
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           Navbar
//         </div>
//         <div className="navbar-options">
//           <button className="display-button" onClick={handleDisplayClick}>
//             Display
//           </button>
//           {isCardVisible && (
//             <div className="dropdown-card">
//               <div className="dropdown-option">
//                 <label>Grouping</label>
//                 <select>
//                   <option>Status</option>
//                   <option>Priority</option>
//                   <option>Assignee</option>
//                 </select>
//               </div>
//               <div className="dropdown-option">
//                 <label>Ordering</label>
//                 <select>
//                   <option>Priority</option>
//                   <option>Date Created</option>
//                   <option>Alphabetical</option>
//                 </select>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ------------------------333333333333333-------------------------------

import React, { useState, useContext } from "react";
import { KanbanBoardContext } from "../../kanbanBoard";
import "./navbar.css";

const Navbar = () => {
  const { groupBy, sortBy, setGroupBy, setSortBy } = useContext(KanbanBoardContext);

  // Define states
  const [isCardVisible, setIsCardVisible] = useState(false);

  // Defining Functions
  const handleDisplayClick = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleGroupChange = (value) => {
    setGroupBy(value);
    // localStorage.setItem("groupBy", value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    // localStorage.setItem("sortBy", value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-options">
          <button className="display-button" onClick={handleDisplayClick}>
            <i className="fas fa-filter"></i> Display
          </button>
          {isCardVisible && (
            <div className="dropdown-card">
              <div className="dropdown-option">
                <label>Grouping</label>
                <select
                  onChange={(e) => handleGroupChange(e.target.value)}
                  value={groupBy}
                >
                  <option value="status">Status</option>
                  <option value="userId">Users</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="dropdown-option">
                <label>Ordering</label>
                <select
                  onChange={(e) => handleSortChange(e.target.value)}
                  value={sortBy}
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;