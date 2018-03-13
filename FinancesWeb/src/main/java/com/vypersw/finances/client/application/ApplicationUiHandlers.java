package com.vypersw.finances.client.application;

import com.gwtplatform.mvp.client.UiHandlers;
import com.vypersw.finances.client.content.ContentContainerPresenter;
import com.vypersw.finances.client.content.ContentType;

import java.util.Map;

public interface ApplicationUiHandlers extends UiHandlers {
	public void logout();

	public ContentContainerPresenter openPerspective(ContentType type);
	public void closePerspective(ContentType type);

	void move(ContentType type, Map<String, String> params);
}
