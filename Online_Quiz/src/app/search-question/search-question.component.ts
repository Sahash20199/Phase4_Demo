import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Questions } from '../questions';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.css']
})
export class SearchQuestionComponent implements OnInit {

  private question:Questions;
  private temp:Questions;
  private id:number;
  private questionList:Questions[];
  constructor(private questionService:QuestionService,private router:Router) { 
    this.question=new Questions;
  }

  public searchQuestion(id:number):void{
    this.questionService.searchQuestion(id).subscribe(res=>{
      this.temp = res;
      this.questionService.searchResult(this.temp);
      this.router.navigate(['/search-result']);
    })
  }

  ngOnInit() {
    this.questionService.getAllQuestions().subscribe(res=>{
      this.questionList=res;
    })
  }

}
