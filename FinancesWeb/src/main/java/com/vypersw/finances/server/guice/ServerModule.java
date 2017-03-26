package com.vypersw.finances.server.guice;

import com.gwtplatform.dispatch.rpc.server.guice.HandlerModule;
import com.vypersw.finances.client.actions.LoginAction;
import com.vypersw.finances.client.actions.LogoutAction;
import com.vypersw.finances.server.actionhandlers.LoginActionHandler;
import com.vypersw.finances.server.actionhandlers.LogoutActionHandler;

public class ServerModule extends HandlerModule {
    @Override
    protected void configureHandlers() {
    	bindHandler(LoginAction.class, LoginActionHandler.class);
    	bindHandler(LogoutAction.class, LogoutActionHandler.class);
    }
}