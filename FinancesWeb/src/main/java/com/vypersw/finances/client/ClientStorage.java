package com.vypersw.finances.client;

import java.util.HashMap;
import java.util.Map;

public class ClientStorage {

    public static final String USER_ID = "USER_ID";

    private static Map<String, String> values = new HashMap<>();

    private ClientStorage() {

    }

    public static void storeValue(String key, String value) {
        values.put(key, value);
    }

    public static String getValue(String key) {
        return values.get(key);
    }

    public static Long getUserId() {
        if (values.containsKey(USER_ID)) {
            return new Long(values.get(USER_ID));
        }
        return 0L;
    }
}
