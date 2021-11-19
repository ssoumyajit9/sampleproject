package com.project.GroceryBackend;

import static org.junit.Assert.assertEquals;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.project.GroceryBackend.DAO.UserDAO;
import com.project.GroceryBackend.model.User;

public class UserTest
{

	private static AnnotationConfigApplicationContext context;
	static User user;
	static UserDAO userDAO;
	@BeforeClass
	public static void init() 
	{
		context = new AnnotationConfigApplicationContext();
		context.scan("com.project.GroceryBackend");
		context.refresh();
		
		userDAO = (UserDAO)context.getBean("userDAO");
	}
	@Test
	public void testAddUser()
	{
	
		user = new User();
		user.setFirstName("Sudip");
		user.setLastName("Singh");
		user.setEmail("ss@gmail.com");
		user.setContactNumber("9004675689");
		user.setRole("ADMIN");
		user.setPassword("123");
		assertEquals("Error",true,userDAO.addUser(user));
	}
}
