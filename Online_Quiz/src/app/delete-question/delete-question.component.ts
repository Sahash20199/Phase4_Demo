import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { Questions } from '../questions';


@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  private question:Questions;
  private id:number;
  private questionList:Questions[];
  constructor(private questionservice:QuestionService,private router:Router) { 
    this.question=new Questions;
  }
  

  public deleteQuestion(id:number):void{
    this.questionservice.deleteQuestion(id).subscribe(res=>{
      this.router.navigate(['/questionsList']);
    });
  }

  ngOnInit() {
    this.questionservice.getAllQuestions().subscribe(res =>{
      this.questionList = res;
    });
  }

}
