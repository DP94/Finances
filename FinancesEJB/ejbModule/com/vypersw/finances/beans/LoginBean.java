package com.vypersw.finances.beans;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.Query;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.services.LoginService;
import com.vypersw.finances.user.User;

/**
 * Session Bean implementation class LoginBean
 */
@Stateless
@Local(LoginService.class)
public class LoginBean extends AbstractBean implements LoginService {

	

	
    /**
     * Default constructor. 
     */
    public LoginBean() {
        // TODO Auto-generated constructor stub
    }

	@Override
	public boolean login(String username, String password) {
		if (username != null && !username.equals("") && password != null && !password.equals("")) {
			User user = new User();
			Query query = entityManager.createQuery("SELECT u FROM User u WHERE u.username = :name")
									   .setParameter("name", username);
			user = (User) query.getSingleResult();
			if (user == null) {
				return false;
			}
			
			if (user.getPassword().equals(password)) {
				return true;
			}
		}
		return false;
	}
}
