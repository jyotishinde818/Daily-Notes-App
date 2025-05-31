package com.data.dto;

public class Userdto {

	String username;
	String Password;
	public Userdto() {
		super();
	}
	public Userdto(String username, String password) {
		super();
		this.username = username;
		Password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	
}
