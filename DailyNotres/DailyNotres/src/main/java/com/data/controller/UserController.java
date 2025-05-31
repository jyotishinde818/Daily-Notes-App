package com.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.data.dto.Userdto;
import com.data.entity.User;
import com.data.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserService usersv;
	
	@PostMapping("/register")//http://localhost:8080/users/register
	public String save(@RequestBody User u) {
		return usersv.save(u);
	}

	//define user valid or not 
	@PostMapping("/login")//http://localhost:8080/users/login
	public ResponseEntity<?> login(@RequestBody Userdto logindto) {
		User user = usersv.login(logindto.getUsername(),logindto.getPassword());
		
		if(user != null) {
			return ResponseEntity.ok(user);
		}else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
		}
		}
	
	
	
}
