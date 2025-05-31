import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // Import the custom CSS

const AdminDashboard = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/notes/all')
      .then((response) => setNotes(response.data))
      .catch(() => setError('Failed to fetch notes.'));
  }, []);

  return (
    <div className="admin-dashboard container py-5">
      <h2 className="text-center mb-4 admin-title">📋 Admin Dashboard</h2>

      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="row">
        {notes.length === 0 ? (
          <div className="col-12 text-center">
            <div className="alert alert-info">No notes available.</div>
          </div>
        ) : (
          notes.map((note, index) => (
            <div key={note.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card note-card h-100 border-0 shadow-lg">
                <div className="card-body d-flex flex-column">
                  <div className="note-badge mb-2">Note #{index + 1}</div>
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text flex-grow-1">{note.content}</p>
                  <p className="text-muted mt-3 small">
                    <strong>User ID:</strong> {note.userId} <br />
                    <strong>Created:</strong>{' '}
                    {new Date(note.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
