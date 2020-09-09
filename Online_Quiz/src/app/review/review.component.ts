import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  score:number;
  constructor(private questionService:QuestionService,private router:Router) {}

  ngOnInit() {
    this.score = this.questionService.getScore();
  }
  public update():void{
    this.router.navigate(['/final'])
  }
  public nav():void{
    this.router.navigate(['/attempt']);
  }

}
