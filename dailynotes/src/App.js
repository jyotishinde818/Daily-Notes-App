// import logo from './logo.svg';
// import './App.css';
// import Register from './components/Register';
// import Login from './components/Login';
// import AdminDashboard from './components/AdminDashboard';
// import UserDashboard from './components/UserDashboard';
// import CreateEditNote from './components/CreateEditNote';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from 'react';
// function App() {
//   // const [user, setUser] = useState(null); // { id, username, role }

//   // // Simple login handler
//   // const handleLogin = (userData) => {
//   //   setUser(userData);
//   // };

//   // // Simple logout handler
//   // const handleLogout = () => {
//   //   setUser(null);
//   // };

//   // if (!user) {
//   //   return (
//   //     <div>
//   //       <h2>Login</h2>
//   //       <Login onLogin={handleLogin} />
//   //       <hr />
//   //       <h2>Register</h2>
//   //       <Register />
//   //     </div>
//   //   );
//   // }
//   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//   const role = localStorage.getItem('role');
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/user" element={<UserDashboard />} />
//         <Route path="/create" element={<CreateEditNote />} />
//             <Route path="/edit/:noteId" element={<CreateEditNote />} />
//         </Routes>
//       </Router>

//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import CreateEditNote from './components/CreateEditNote';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        {/* <Route path="/create" element={<CreateEditNote />} />
        <Route path="/edit/:noteId" element={<CreateEditNote />} /> */}
        <Route path="/create" element={<CreateEditNote />} />
<Route path="/edit/:id" element={<CreateEditNote />} />

      </Routes>
    </Router>
  );
}

export default App;
