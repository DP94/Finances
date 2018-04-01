package com.vypersw.finances.enumeration;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public enum TransactionType implements Serializable {

    EXPENSE(1), INCOME(2), TRANSFER(3);

    private static final Map<Integer, TransactionType> values = new HashMap<>();

    static {
        for (TransactionType type : TransactionType.values()) {
            values.put(type.getValue(), type);
        }
    }

    int id;

    private TransactionType(int id) {
        this.id = id;
    }

    public int getValue() {
        return this.id;
    }

    public static TransactionType forValue(int value) {
        return values.get(value);
    }
}
