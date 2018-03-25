package com.vypersw.finances.login.bean;

import com.vypersw.finances.beans.*;
import com.vypersw.finances.services.*;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.util.Properties;

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
	
	public UserService getUserService() {
		return (UserService) lookup(UserBean.class.getSimpleName(), UserService.class.getName());
	}

    public AccountService getAccountService() {
        return (AccountService) lookup(AccountBean.class.getSimpleName(), AccountService.class.getName());
    }

    public TransactionService getTransactionService() {
        return (TransactionService) lookup(TransactionBean.class.getSimpleName(), TransactionService.class.getName());
    }

	public CategoryService getCategoryService() {
		return (CategoryService) lookup(CategoryBean.class.getSimpleName(), CategoryService.class.getName());
	}

}
