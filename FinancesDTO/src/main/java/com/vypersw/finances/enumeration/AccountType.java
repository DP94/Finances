package com.vypersw.finances.enumeration;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public enum AccountType implements Serializable {

    SAVINGS(1), ISA(2), CURRENT_ACCOUNT(3);

	private static final Map<Integer, AccountType> values = new HashMap<>();

	static {
		for (AccountType type : AccountType.values()) {
			values.put(type.getValue(), type);
		}
	}

	int id;

	private AccountType(int id) {
		this.id = id;
	}

	public int getValue() {
		return this.id;
	}
	
	public static AccountType forValue(int value) {
		return values.get(value);
	}
}
