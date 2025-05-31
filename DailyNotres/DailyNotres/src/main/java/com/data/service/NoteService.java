package com.data.service;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.data.entity.Notes;

import com.data.repository.NoteRepository;

@Service
public class NoteService {

	@Autowired
	NoteRepository nresp;
	
	 // Get all notes
    public List<Notes> getAllNotes() {
        return nresp.findAll();  // Assuming NoteRepository is using JPA
    }
	
	// Get all notes for a specific user
    public List<Notes> getNotesByUserId(long userId) {
        return nresp.findByUserId(userId);
    }

    // Create a new note
//    public Notes createNote(Notes note) {
//        return nresp.save(note);
//    }
//    
    
    public Notes createNote(Notes note) {
        note.setCreatedAt(new Date());  // Set creation time here
        return nresp.save(note);
    }
    
 // Update an existing note
    public String updateNote(int id, Notes noteDetails) {
    	Notes existingnote = nresp.findById(id) .orElse(null);
    	if(existingnote == null) {
    		return "Not matching record for given id";
    	}
    	if(noteDetails.getTitle()==null && noteDetails.getContent()==null 
    			&& noteDetails.getCreatedAt()==null) {
    		return "No data provided for updation";
    	}
    	if(noteDetails.getTitle() !=null) {
    		existingnote.setTitle(noteDetails.getTitle());
    	}
    	if(noteDetails.getContent() !=null) {
    		existingnote.setContent(noteDetails.getContent());
    	}
    	if(noteDetails.getCreatedAt() !=null) {
    		existingnote.setCreatedAt(noteDetails.getCreatedAt());
    	}
    	nresp.save(existingnote);
    	return "Note updated sucessfully";
    }
    
    
    public void deleteNoteById(int id) {
        nresp.deleteById(id);
    }
    
    public Notes getNoteById(int id) {
        return nresp.findById(id).orElse(null);
    }

    
}
