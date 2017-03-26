package com.vypersw.finances.client.application;

import com.gwtplatform.mvp.client.UiHandlers;
import com.vypersw.finances.client.content.ContentType;

public interface ApplicationUiHandlers extends UiHandlers {
	public void logout();
	public void openPerspective(ContentType type);
	public void closePerspective(ContentType type);
}
