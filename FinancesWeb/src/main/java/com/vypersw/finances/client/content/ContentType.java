package com.vypersw.finances.client.content;

public enum ContentType {
	
	ADD_EXPENSE("Add expense");
	
	private String name;
	
	ContentType(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
}
