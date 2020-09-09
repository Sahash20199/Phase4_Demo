import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  score:number;
  constructor(private questionService:QuestionService,private router:Router) {}

  ngOnInit() {
    this.score = this.questionService.getScore();
  }

}
