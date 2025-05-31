// import React, { useState, useEffect } from 'react';

// function NoteForm({ note, onSave, onCancel }) {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     if (note) {
//       setTitle(note.title);
//       setContent(note.content);
//     } else {
//       setTitle('');
//       setContent('');
//     }
//   }, [note]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!title.trim() || !content.trim()) return;
//     onSave({ title, content });
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
//       <div>
//         <input
//           type="text"
//           placeholder="Note Title"
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <textarea
//           placeholder="Note Content"
//           value={content}
//           onChange={e => setContent(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">{note ? 'Update' : 'Add'} Note</button>
//       {note && <button type="button" onClick={onCancel}>Cancel</button>}
//     </form>
//   );
// }

// export default NoteForm;


import React, { useState } from 'react';

const NoteForm = ({ onSave }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(note);
    setNote({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
      <button type="submit">Save Note</button>
    </form>
  );
};

export default NoteForm;
