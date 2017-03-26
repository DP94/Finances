package com.vypersw.finances.server.guice;

import com.google.inject.servlet.ServletModule;
import com.gwtplatform.dispatch.rpc.server.guice.DispatchServiceImpl;
import com.gwtplatform.dispatch.rpc.shared.ActionImpl;
import com.googlecode.objectify.ObjectifyFilter;
import javax.inject.Singleton;

public class DispatchServletModule extends ServletModule {
    @Override
    public void configureServlets() {
        serve("/" + ActionImpl.DEFAULT_SERVICE_NAME + "*").with(DispatchServiceImpl.class);
        
        filter("/*").through(ObjectifyFilter.class);
        bind(ObjectifyFilter.class).in(Singleton.class);
    }
}