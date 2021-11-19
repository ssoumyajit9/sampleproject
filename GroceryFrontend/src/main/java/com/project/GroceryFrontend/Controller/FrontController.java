package com.project.GroceryFrontend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.project.GroceryBackend.DAO.CategoryDAO;

@Controller
public class FrontController {


	@Autowired
	CategoryDAO categoryDAO;
	@RequestMapping(value="/")
	public ModelAndView index()
	{
		ModelAndView mv = new ModelAndView("page");
		
		mv.addObject("title","My Online Shopping");
		mv.addObject("userclickhome" , true);
		mv.addObject("categories",categoryDAO.categoryList());

		return mv;
	}
}
