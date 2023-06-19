package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.module.Ordermodule;

public interface Orderrepository extends JpaRepository<Ordermodule, Long> {

}
