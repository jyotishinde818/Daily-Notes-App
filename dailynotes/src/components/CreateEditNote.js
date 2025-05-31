import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './CreateEditNote.css';

const CreateEditNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createdAt, setCreatedAt] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/notes/${id}`)
        .then(res => {
          setTitle(res.data.title);
          setContent(res.data.content);
          setCreatedAt(res.data.createdAt);
        })
        .catch(err => console.error('Failed to load note:', err));
    }
  }, [id]);

  const formatDate = (dateString) => {
    const options = { dateStyle: 'medium', timeStyle: 'short' };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.id) {
      alert("User not logged in");
      return;
    }

    const note = {
      title,
      content,
      userId: user.id
    };

    try {
      if (id) {
        await axios.put(`http://localhost:8080/api/notes/updatenote/${id}`, note);
        alert("Note updated successfully");
      } else {
        const res = await axios.post('http://localhost:8080/api/notes/createnote', note);
        setCreatedAt(res.data.createdAt);  // ✅ safely access data
        alert("Note created successfully at " + formatDate(res.data.createdAt));
      }
      navigate('/user');
    } catch (err) {
      console.error('Failed to save note:', err);
      alert("Error occurred while saving the note.");
    }
  };

  return (
    <div className="create-note-bg">
      <div className="form-container">
        <h2>{id ? 'Edit Note' : 'Create New Note'}</h2>
        {createdAt && (
          <p style={{ fontSize: '14px', color: '#666' }}>
            Created At: <strong>{formatDate(createdAt)}</strong>
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter note title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Write your note here..."
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
          <button type="submit">{id ? 'Update Note' : 'Create Note'}</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEditNote;
