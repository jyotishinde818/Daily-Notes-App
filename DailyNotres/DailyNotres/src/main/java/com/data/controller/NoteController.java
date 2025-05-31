package com.data.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.data.entity.Notes;
import com.data.service.NoteService;
@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:3000")
public class NoteController {

	@Autowired
	NoteService nserv;
	// Get all notes
    @GetMapping("/all")
    public List<Notes> getAllNotes() {
        return nserv.getAllNotes();
    }
    
    @GetMapping("/nuser")
    public ResponseEntity<List<Notes>> getNotesByUserId(@RequestParam Long userId) {
        if (userId == null) {
            return ResponseEntity.badRequest().build();
        }

        List<Notes> notes = nserv.getNotesByUserId(userId);
        return ResponseEntity.ok(notes);
    }
    
//    @PostMapping("/createnote")
//    public ResponseEntity<Notes> createNote(@RequestBody Notes note) {
//        Notes createdNote = nserv.createNote(note);
//        return ResponseEntity.status(HttpStatus.CREATED).body(createdNote);
//    }
    @PostMapping("/createnote")
    public ResponseEntity<Notes> createNote(@RequestBody Notes note) {
        Notes createdNote = nserv.createNote(note);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdNote);
    }

    // Update a note
    @PutMapping("/updatenote/{id}")
    public String updateNote(@PathVariable int id, @RequestBody Notes note) {
        return nserv.updateNote(id, note);
    }
    
    // Delete a note
    @DeleteMapping("/deletenote/{id}")
    public void deleteNote(@PathVariable int id) {
        nserv.deleteNoteById(id);
    }
    
    
    @GetMapping("/{id}")
    public ResponseEntity<Notes> getNoteById(@PathVariable int id) {
        Notes note = nserv.getNoteById(id);
        if (note != null) {
            return ResponseEntity.ok(note);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
