package com.demo.service;

import java.util.List;


import com.demo.exception.BusinessException;
import com.demo.model.Question;

public interface QuestionService {

	public Question addQuestion(Question question);
	public Question updateQuestion(Question question);
	public Question getQuestionById(int id) throws BusinessException;
	public void deleteQuestionById(int id);
	public List<Question> getAllQuestions();
	public void update(String str, int id);
	public int getAnswers();
	
}
