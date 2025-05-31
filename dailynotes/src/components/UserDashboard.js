import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserDashboard.css'; // Custom CSS for styling

const UserDashboard = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');
  const userId = 1; // Replace with actual user ID logic

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/notes/nuser?userId=${userId}`)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        setError('Failed to fetch notes. Please try again later.');
        console.error('Error fetching notes:', error);
      });
  }, [userId]);

  const handleDelete = (noteId) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      axios
        .delete(`http://localhost:8080/api/notes/deletenote/${noteId}`)
        .then(() => {
          setNotes(notes.filter((note) => note.id !== noteId));
        })
        .catch((error) => {
          setError('Failed to delete note. Please try again later.');
          console.error('Error deleting note:', error);
        });
    }
  };

  return (
    <div className="user-dashboard-bg">
      <div className="container">
        <h1 className="text-center mb-4 heading-shadow">User Dashboard</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="d-flex justify-content-between mb-4">
          <Link to="/create" className="btn btn-success">
            + Create Note
          </Link>
        </div>

        <div className="row">
          {notes.length === 0 ? (
            <div className="col-12">
              <div className="alert alert-info">No notes available.</div>
            </div>
          ) : (
            notes.map((note) => (
              <div key={note.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm card-custom">
                  <div className="card-body d-flex flex-column">
                    <h6 className="text-muted mt-3 small">
                    <strong>Created:</strong>{' '}
                    {new Date(note.createdAt).toLocaleDateString()}
                  </h6>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                    <div className="btn-group mt-auto">
                      <Link
                        to={`/edit/${note.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(note.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
