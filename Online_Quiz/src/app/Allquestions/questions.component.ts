import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../question.service';
import { Questions } from '../questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  private questionList:Questions[];
  constructor(private questionservice:QuestionService) {

   }

  ngOnInit() {
    this.questionservice.getAllQuestions().subscribe(res =>{
      this.questionList = res;
    });
  }

}
