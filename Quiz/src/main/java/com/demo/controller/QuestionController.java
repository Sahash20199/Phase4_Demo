package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.exception.BusinessException;
import com.demo.model.Question;
import com.demo.service.QuestionService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class QuestionController {

	@Autowired
	private QuestionService service;
	
	private MultiValueMap<String, String> map;

	@PostMapping("/question")
	public Question addQuestion(@RequestBody Question question) {

		return service.addQuestion(question);
	}

	@PutMapping("/question")
	public Question updateQuestion(@RequestBody Question question) {

		return service.updateQuestion(question);
	}

	@GetMapping("/question/{id}")
	public ResponseEntity<Question> getQuestionById(@PathVariable int id) {

		try {
			return new ResponseEntity<>(service.getQuestionById(id),HttpStatus.OK);
		} catch (BusinessException e) {
			map=new LinkedMultiValueMap<>();
			map.add("errorMessage", e.getMessage());
			return new ResponseEntity<>(null,map, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/question/{id}")
	public void deleteQuestionById(@PathVariable int id) {
		service.deleteQuestionById(id);

	}

	@GetMapping("/questions")
	public List<Question> getAllQuestions() {

		return service.getAllQuestions();
	}
	
	@PutMapping("/question/add/{id}/{str}")
	public void update(@PathVariable int id, @PathVariable String str){
		service.update(str,id);
	}
	
	@GetMapping("/question/answers")
	public int evaluate(){
		return service.getAnswers();
	}

	


}
