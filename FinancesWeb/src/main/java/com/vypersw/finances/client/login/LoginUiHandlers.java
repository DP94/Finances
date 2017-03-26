package com.vypersw.finances.client.login;

import com.gwtplatform.mvp.client.UiHandlers;

public interface LoginUiHandlers extends UiHandlers {
	public void login(String username, String password);
}
