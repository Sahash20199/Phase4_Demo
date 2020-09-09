package com.demo.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

	@Query(value = "Select count(id) from question where answer=attempt", nativeQuery = true)
	public int evaluate();
	
	@Modifying
	@Query(value= "Update question set attempt=?1 where id = ?2", nativeQuery = true)
	public void updated( String str,int id);
}
