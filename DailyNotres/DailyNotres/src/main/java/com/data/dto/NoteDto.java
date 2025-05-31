package com.data.dto;

public class NoteDto {

	private String title;
    private String content;
	public NoteDto() {
		super();
	}
	public NoteDto(String title, String content) {
		super();
		this.title = title;
		this.content = content;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
    
}
