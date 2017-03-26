package com.vypersw.finances.client.application;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ApplicationUiHandlers extends UiHandlers {
	public void logout();
	public void openPerspective();
	public void closePerspective();
}
