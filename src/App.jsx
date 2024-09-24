// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// -----------------------333333333333--------------------------
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         setTickets(response.data.tickets); // Assume tickets are in response.data.tickets
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Kanban Board</h1>
//       {/* Ticket display logic will go here */}
//       <h1>Kanban Board</h1>
//       <kanbanBoard tickets={tickets} />
//     </div>
//   );
// }

// export default App;

// ------------------------444444444444444444---------------------
// import React from 'react';
// import Card from './components/Card/card';
// import CardU from './components/Card_U/card_u';
// // import TemplateOne from './components/TemplateOne/TemplateOne';

// function App() {
//   const userName = "John Doe";
//   const profilePicture = "path/to/profile/picture.jpg"; // Replace with actual image path
//   const taskCount = 5;
//   return (
//     <div>
//       {/* Card Component */}
//       <Card id="CAM-11" title="Conduct Security Vulnerability Assessment" type="Feature Request" />
//       <CardU userName="Anoop Sharma" profilePicture="path_to_avatar_image.jpg" taskCount="1" />

//       {/* TemplateOne Component */}
//       {/* <TemplateOne heading="Template 1 Title" description="This is the description for Template One." /> */}
//     </div>
//   );
// }

// export default App;

// ----------------5555555555555555555555------------------------
// App.jsx
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

// Importing styles
import "./App.css";

// Import Components
import CardU from "./components/Card_U/card_u"; // Ensure the path is correct based on your file structure
import Navbar from "./components/Navbar/navbar"; // Ensure the path is correct based on your file structure
import Card from "./components/Card/card";

// Import Context
import { KanbanBoardContext } from "./kanbanBoard";

// Import assets
import doneSvg from "./assets/Done.svg";

// Define Priorities
const priorityFilter = [
  { name: "No Priority", logo: { doneSvg }, val: 0 },
  { name: "Low", logo: { doneSvg }, val: 1 },
  { name: "Medium", logo: { doneSvg }, val: 2 },
  { name: "High", logo: { doneSvg }, val: 3 },
  { name: "Urgent", logo: { doneSvg }, val: 4 },
];

// Define Status
const statusFilter = [
  { name: "To Do", logo: { doneSvg }, val: "Todo" },
  { name: "In Progress", logo: { doneSvg }, val: "In progress" },
  { name: "Done", logo: { doneSvg }, val: "Done" },
  { name: "Cancelled", logo: { doneSvg }, val: "Cancelled" },
  { name: "Backlog", logo: { doneSvg }, val: "Backlog" },
];

const App = () => {
  const { groupBy, sortBy } = useContext(KanbanBoardContext);

  // Define States
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([
    { username: "Juan", logo: "sdgifghmic" },
    { username: "Juan", logo: "sdgifghmic" },
    { username: "Juan", logo: "sdgifghmic" },
    { username: "Juan", logo: "sdgifghmic" },
  ]);
  const [groupBar, setGroupBar] = useState(statusFilter);
  const [error, setError] = useState(null); // To handle error state
  const [isLoading, setIsLoading] = useState(false); // To handle loading state

  // Some constants
  const userName = "John Doe";
  const profilePicture = "path/to/profile/picture.jpg"; // Replace with actual image path
  const taskCount = 5;

  // Define Functions
  // const fetchEntities = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post();
  //   } catch (err) {
  //     console.error(`The error recieved is: ${err}`);
  //     setError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // Fetch Data from API
  const fetchEntitiesAndUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = response.data;
      console.log("API Response: ", data); // Debugging

      setTasks(data.tickets);
      setUsers(data.users);
    } catch (err) {
      console.error(`The error received is: ${err}`);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleGroupChange = async () => {
      if (groupBy === "status") {
        setGroupBar(statusFilter);
      } else if (groupBy === "userId") {
        let groupUsers = users.map((user) => ({
          name: user.name,
          logo: { doneSvg },
          val: user.id,
        }));
        setGroupBar(groupUsers);
      } else {
        setGroupBar(priorityFilter);
      }
    };

    handleGroupChange();
  }, [groupBy]);

  useEffect(() => {
    const handleSortChange = () => {
      if (sortBy === "title") {
        const sortedTaks = [...tasks].sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
        });

        setTasks(sortedTaks);
      } else {
        const sortedTasks = [...tasks].sort((a,b) => {
          if (a.priority < b.priority) return -1;
          if (a.priority > b.priority) return 1;
          return 0;
        });

        setTasks(sortedTasks);
      }
    };

    handleSortChange();
  }, [sortBy]);

  useEffect(() => {
    fetchEntitiesAndUsers();
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <Navbar />
          <div className="groupBar-container">
            {Array.isArray(groupBar) &&
              groupBar.length > 0 &&
              groupBar.map((grpBarElement, idx) => (
                <CardU
                  key={idx}
                  userName={grpBarElement.name}
                  profilePicture={grpBarElement.logo}
                  taskCount={taskCount}
                />
              ))}
          </div>
          <div className="parentDiv">
            {groupBar.map((grpEle, idx) => (
              <div key={idx} className="childParentDiv">
                {Array.isArray(tasks) &&
                  tasks.length > 0 &&
                  (groupBy === "status"
                    ? tasks
                        .filter((task) => task.status === grpEle.val)
                        .map((task, idx) => (
                          <Card
                            key={idx}
                            id={task.id}
                            title={task.title}
                            logo={doneSvg}
                            status={true}
                            type={task.tag[0]}
                          />
                        ))
                    : groupBy === "userId"
                    ? tasks
                        .filter((task) => task.userId === grpEle.val)
                        .map((task, idx) => (
                          <Card
                            key={idx}
                            id={task.id}
                            title={task.title}
                            logo={doneSvg}
                            status={true}
                            type={task.tag[0]}
                          />
                        ))
                    : tasks
                        .filter((task) => task.priority === grpEle.val)
                        .map((task, idx) => (
                          <Card
                            key={idx}
                            id={task.id}
                            title={task.title}
                            logo={doneSvg}
                            status={true}
                            type={task.tag[0]}
                          />
                        )))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
