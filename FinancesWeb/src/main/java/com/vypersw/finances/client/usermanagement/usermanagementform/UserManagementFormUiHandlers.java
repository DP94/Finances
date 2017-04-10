package com.vypersw.finances.client.usermanagement.usermanagementform;

import com.gwtplatform.mvp.client.UiHandlers;
import com.vypersw.finances.dto.user.UserDTO;

interface UserManagementFormUiHandlers extends UiHandlers {
	void onSave();
	UserDTO getData();
}