package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.module.Signmodule;

public interface Signrepository extends JpaRepository<Signmodule, Long> {

	Signmodule findByName(String user);


}
