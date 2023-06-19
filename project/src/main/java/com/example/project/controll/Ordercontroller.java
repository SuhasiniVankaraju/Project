package com.example.project.controll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.module.Ordermodule;
import com.example.project.repository.Orderrepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/regdata")
public class Ordercontroller {

	   @Autowired
	   Orderrepository repo;
	   
	   
	   @PostMapping("/regpost")
	   public String pos(@RequestBody Ordermodule d) {
		   repo.save(d);
		   return "data saved";
	   }
	   
	   
	   
	   
}
