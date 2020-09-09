import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path:'questionsList',component:QuestionsComponent},
  {path:'createQuestion',component:CreateQuestionComponent},
  {path:'updateQuestion',component:UpdateQuestionComponent},
  {path:'deleteQuestion',component:DeleteQuestionComponent},
  {path:'searchQuestion',component:SearchQuestionComponent},
  {path:'search-result', component:SearchResultComponent},
  {path:'home',component:HomeComponent},
  {path:'quiz',component:QuizComponent},
  {path:'attempt',component:AttemptComponent},
  {path:'complete',component:ReviewComponent},
  {path:'final',component:FinalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
