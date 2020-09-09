import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { Questions } from '../questions';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  private question:Questions;
  private questionList:Questions[];
  constructor(private questionservice:QuestionService, private router:Router) { 
    this.question = new Questions();
  }

  public updateQuestion():void{
    this.questionservice.updateQuestion(this.question).subscribe(res=>{
      this.question=new Questions;
      this.router.navigate(['/questionsList'])
    });
    
  }

  ngOnInit() {
    this.questionservice.getAllQuestions().subscribe(res =>{
      this.questionList = res;
    });
  }

}
