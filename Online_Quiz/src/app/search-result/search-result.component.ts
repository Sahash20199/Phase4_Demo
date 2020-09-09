import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  private question:Questions;
  constructor(private questionservice:QuestionService) { }

  ngOnInit() {
    this.question = this.questionservice.getResult();
  }
  

}
