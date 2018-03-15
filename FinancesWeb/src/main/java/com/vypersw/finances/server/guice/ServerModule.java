package com.vypersw.finances.server.guice;

import com.gwtplatform.dispatch.rpc.server.guice.HandlerModule;
import com.vypersw.finances.client.actions.*;
import com.vypersw.finances.server.actionhandlers.*;

public class ServerModule extends HandlerModule {
    @Override
    protected void configureHandlers() {
    	bindHandler(GetCurrenciesAction.class, GetCurrenciesActionHandler.class);
    	bindHandler(LoginAction.class, LoginActionHandler.class);
    	bindHandler(LogoutAction.class, LogoutActionHandler.class);
    	bindHandler(UserAction.class, UserActionHandler.class);
    	bindHandler(InitSessionAction.class, InitSessionActionHandler.class);
		bindHandler(GetAccountAction.class, GetAccountActionHandler.class);
        bindHandler(AccountAction.class, AccountActionHandler.class);
    }
}