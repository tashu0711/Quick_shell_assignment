// import React, { useState } from 'react';


// const KanbanBoard = ({ tickets }) => {
//   const [groupBy, setGroupBy] = useState('status');
//   const [sortBy, setSortBy] = useState('title');

//   const groupedTickets = tickets.reduce((groups, ticket) => {
//     const key = ticket[groupBy];
//     if (!groups[key]) {
//       groups[key] = [];
//     }
//     groups[key].push(ticket);
//     return groups;
//   }, {});

//   return (
//     <div>
//         {/* Grouping Dropdown */}
//       <select onChange={(e) => setGroupBy(e.target.value)}>
//         <option value="status">By Status</option>
//         <option value="user">By User</option>
//         <option value="priority">By Priority</option>
//       </select>
      
//       {/* Sorting Dropdown */}
//       <select onChange={(e) => setSortBy(e.target.value)}>
//         <option value="title">Sort by Title</option>
//         <option value="priority">Sort by Priority</option>
//       </select>

//       <div className="kanban-board">
//         {Object.keys(groupedTickets).map((key) => (
//             // Sort tickets within each group
            
//           <div key={key} className="group">
//             <h3>{key}</h3>
//             {groupedTickets[key].map(ticket => (
//               <div key={ticket.id} className="ticket">
//                 <p>{ticket.title}</p>
//                 {/* Other ticket details */}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KanbanBoard;
// -----------------------------------------2222222222222------------------------

// import React, { useState } from 'react';

// const KanbanBoard = ({ tickets }) => {
//   const [groupBy, setGroupBy] = useState('status');
//   const [sortBy, setSortBy] = useState('title');

//   // Group tickets
//   const groupedTickets = tickets.reduce((groups, ticket) => {
//     const key = ticket[groupBy] || 'Unassigned'; // Handle undefined keys
//     if (!groups[key]) {
//       groups[key] = [];
//     }
//     groups[key].push(ticket);
//     return groups;
//   }, {});

//   return (
//     <div>
//       {/* Grouping Dropdown */}
//       <select onChange={(e) => setGroupBy(e.target.value)}>
//         <option value="status">By Status</option>
//         <option value="user">By User</option>
//         <option value="priority">By Priority</option>
//       </select>

//       {/* Sorting Dropdown */}
//       <select onChange={(e) => setSortBy(e.target.value)}>
//         <option value="title">Sort by Title</option>
//         <option value="priority">Sort by Priority</option>
//       </select>

//       <div className="kanban-board">
//         {Object.keys(groupedTickets).map((key) => {
//           // Sort tickets within each group
//           let sortedTickets = groupedTickets[key];

//           if (sortBy === 'priority') {
//             sortedTickets.sort((a, b) => b.priority - a.priority); // Sort by priority
//           } else {
//             sortedTickets.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title
//           }

//           return (
//             <div key={key} className="group">
//               <h3>{key}</h3>
//               {sortedTickets.map(ticket => (
//                 <div key={ticket.id} className="ticket">
//                   <p>{ticket.title}</p>
//                   {/* Other ticket details */}
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default KanbanBoard;

import React, { useState, useEffect, createContext } from 'react';

export const KanbanBoardContext = createContext();

export const  KanbanBoardProvider = ({ children }) => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('title');

  // Load saved state from local storage
  useEffect(() => {
    // const savedGroupBy = localStorage.getItem('groupBy');
    // const savedSortBy = localStorage.getItem('sortBy');
    // if (savedGroupBy) setGroupBy(savedGroupBy);
    // if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  // Group tickets
  // const groupedTickets = tickets.reduce((groups, ticket) => {
  //   const key = ticket[groupBy] || 'Unassigned'; // Handle undefined keys
  //   if (!groups[key]) {
  //     groups[key] = [];
  //   }
  //   groups[key].push(ticket);
  //   return groups;
  // }, {});

  return (
    <KanbanBoardContext.Provider value={{ groupBy, setGroupBy, sortBy, setSortBy }}>
      {children}
    </KanbanBoardContext.Provider>
  );
};