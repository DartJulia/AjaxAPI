package com.ajaxlab.AjaxLab;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

public class HomeController {

	@RequestMapping("/")
	public ModelAndView home() {
		return new ModelAndView("index");
	}

}
