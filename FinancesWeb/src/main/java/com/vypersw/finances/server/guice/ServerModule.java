package com.vypersw.finances.server.guice;

import com.gwtplatform.dispatch.rpc.server.guice.HandlerModule;
import com.vypersw.finances.client.actions.UserAction;
import com.vypersw.finances.client.actions.GetCurrenciesAction;
import com.vypersw.finances.client.actions.InitSessionAction;
import com.vypersw.finances.client.actions.LoginAction;
import com.vypersw.finances.client.actions.LogoutAction;
import com.vypersw.finances.server.actionhandlers.UserActionHandler;
import com.vypersw.finances.server.actionhandlers.GetCurrenciesActionHandler;
import com.vypersw.finances.server.actionhandlers.InitSessionActionHandler;
import com.vypersw.finances.server.actionhandlers.LoginActionHandler;
import com.vypersw.finances.server.actionhandlers.LogoutActionHandler;

public class ServerModule extends HandlerModule {
    @Override
    protected void configureHandlers() {
    	bindHandler(GetCurrenciesAction.class, GetCurrenciesActionHandler.class);
    	bindHandler(LoginAction.class, LoginActionHandler.class);
    	bindHandler(LogoutAction.class, LogoutActionHandler.class);
    	bindHandler(UserAction.class, UserActionHandler.class);
    	bindHandler(InitSessionAction.class, InitSessionActionHandler.class);
    }
}