import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Questions } from '../questions';
import { QuestionService } from '../question.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {


  
  private question:Questions;
  constructor(private questionservice:QuestionService, private router:Router) {
    this.question = new Questions();
   }

   public createQuestion():void{
    this.questionservice.createQuestion(this.question).subscribe(res=>{
      this.question = new Questions();
      this.router.navigate(['/questionsList']);
  })
   }

  ngOnInit() {

  }

}
