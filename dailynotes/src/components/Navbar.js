import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm px-4">
      <a className="navbar-brand fw-bold" href="/">
        📝 Daily Notes
      </a>

      <div className="ms-auto d-flex align-items-center gap-2">
        {isLoggedIn && (
          <>
            {role === 'user' && (
              <button
                className="btn btn-outline-light"
                onClick={() => navigate('/user-dashboard')}
              >
                My Notes
              </button>
            )}
            {role === 'admin' && (
              <button
                className="btn btn-outline-light"
                onClick={() => navigate('/admin-dashboard')}
              >
                Admin Panel
              </button>
            )}
            <button className="btn btn-light text-primary fw-medium" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
