import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './Allquestions/questions.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { SearchQuestionComponent } from './search-question/search-question.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { AttemptComponent } from './attempt/attempt.component';
import { ReviewComponent } from './review/review.component';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    CreateQuestionComponent,
    UpdateQuestionComponent,
    DeleteQuestionComponent,
    SearchQuestionComponent,
    SearchResultComponent,
    HomeComponent,
    QuizComponent,
    AttemptComponent,
    ReviewComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
