package com.demo.service.impl;

import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.QuestionRepository;
import com.demo.exception.BusinessException;
import com.demo.model.Question;
import com.demo.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionRepository dao;


	@Override
	public Question addQuestion(Question question) {
		// TODO Auto-generated method stub
		return dao.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		// TODO Auto-generated method stub
		return dao.save(question);
	}

	@Override
	public Question getQuestionById(int id) throws BusinessException {
		// TODO Auto-generated method stub
		if(id<=0) {
			throw new BusinessException("Entered id "+id+" is invalid");
		}
		Question question=null;
		try {
			question=dao.findById(id).get();
		}catch(NoSuchElementException e) {
			throw new BusinessException("No Question found for the id "+id);
		}
		return question;
		
	}

	@Override
	public void deleteQuestionById(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	@Override
	public List<Question> getAllQuestions() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Transactional
	@Override
	public void update( String str, int id) {
		// TODO Auto-generated method stub
		dao.updated(str,id);
	}

	@Override
	public int getAnswers() {
		// TODO Auto-generated method stub
		return dao.evaluate();
	}
	
	




}
