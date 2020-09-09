import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  score:number = 0;
  private question:Questions;
  answer:string;
  private obs:Observable<any>;
  private questionList:Questions[];
  constructor(private questionservice:QuestionService, private router:Router) { 
    this.question = new Questions();
  }

  public result(id:number):void{
   
    this.questionservice.evaluateResult(id,this.answer,).subscribe(res=>{
      this.answer="";
    })
    // this.obs = this.questionservice.getAttempt();
    // console.log(this.obs+"!");
    // if(this.obs){
    //   this.score= this.score + 1;
    //   console.log("score"+this.score);
    // }
    // this.answer="";
    // // else{
    // //   console.log(this.obs);
    // // }
        
  }
  public submit():void{
    if(window.confirm("this will submit the response, Wanna Go ahead?")){
      this.questionservice.setScore();
      this.score = this.questionservice.getScore();
      // .subscribe(res=>{
      //   console.log(res);
      // })
      this.router.navigate(['complete']);
    }
  }

  ngOnInit() {
    this.questionservice.getAllQuestions().subscribe(res =>{
      this.questionList = res;
    });
  }
}
