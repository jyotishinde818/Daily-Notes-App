package com.data.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_data")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	int id;
	String username;
	long contactno;
	String password;
	String urole;
	
	 
	public User() {
		super();
	}
	public User(int id, String username, long contactno, String password, String urole) {
		super();
		this.id = id;
		this.username = username;
		this.contactno = contactno;
		this.password = password;
		this.urole = urole;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public long getContactno() {
		return contactno;
	}
	public void setContactno(long contactno) {
		this.contactno = contactno;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUrole() {
		return urole;
	}
	public void setUrole(String urole) {
		this.urole = urole;
	}
	 
	 
	 
	
}
