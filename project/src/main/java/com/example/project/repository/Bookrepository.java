package com.example.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.module.Bookmodule;

public interface Bookrepository extends JpaRepository<Bookmodule,Long> {

	List<Bookmodule> findByname(String uname);
}
