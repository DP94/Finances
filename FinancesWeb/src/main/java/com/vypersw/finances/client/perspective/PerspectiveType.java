package com.vypersw.finances.client.perspective;

public enum PerspectiveType {
	
	ADD_EXPENSE("Add expense");
	
	private String name;
	
	PerspectiveType(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
}
