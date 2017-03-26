package com.vypersw.finances.login.bean;

import java.util.Properties;

import javax.naming.InitialContext;
import javax.naming.NamingException;

import com.vypersw.finances.beans.LoginBean;
import com.vypersw.finances.services.LoginService;

public class LocalEJBServiceLocator {
	private Properties prop;
	private InitialContext context;
	
	private static LocalEJBServiceLocator instance = null;
	
	public LocalEJBServiceLocator() {
		init();
	}
	
	public static LocalEJBServiceLocator getInstance() {
		if (instance == null) {
			instance = new LocalEJBServiceLocator();
		}
		return instance;
	}
	
	private void init() {
		prop = new Properties();
		prop.put("java.naming.factory.url.pkgs","org.jboss.ejb.client.naming");
		try {
			context = new InitialContext(prop);
		} catch (NamingException e) {
			e.printStackTrace();
		}
	}

	public Object lookup(String bean, String iclass) {
		String moduleName = "FinancesEJB-1";
		String name = "java:app/" + moduleName + "/" + bean + "!" + iclass;
		try {
			return context.lookup(name);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public LoginService getLoginService() {
		return (LoginService) lookup(LoginBean.class.getSimpleName(), LoginService.class.getName());
	}

}
