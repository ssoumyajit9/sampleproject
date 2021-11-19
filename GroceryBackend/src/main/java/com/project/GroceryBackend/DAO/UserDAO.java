package com.project.GroceryBackend.DAO;

import com.project.GroceryBackend.model.User;

public interface UserDAO 
{

	boolean addUser(User user);
	User getByEmail(String email) ;
}
