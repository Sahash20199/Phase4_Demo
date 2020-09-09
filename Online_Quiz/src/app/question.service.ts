import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getValueFromObservable() {
    throw new Error("Method not implemented.");
  }

  private url:string;
  obs:Observable<any>;
  ans:string="";
  flag:Object;
  private question:Questions;
  private score:number;
  res:boolean=false;




  constructor(private http:HttpClient) {
    
    this.url="http://localhost:8090/question";
    this.setScore();

   }

   ngOnInit(){
    this.obs = this.http.get<number>(this.url+"/answers");
    this.http.get<number>(this.url+"/answers").subscribe(res=>{
      this.score = res;
    })
   }
   ngAfterViewInit(){
    this.setScore();
   }

   public async getResponse(url:string){
    return await this.http.get(this.url+"/answers").toPromise();
  }
  async getAll(){
    this.flag = await this.getResponse(this.url);
    return this.flag;
  }
  async some(){
    const data = await this.getAll();
    console.log(data);
  }

  public getAllQuestions():Observable<Questions[]>{
    return this.http.get<Questions[]>(this.url+'s');
    
  }
  public createQuestion(question:Questions):Observable<Questions>{
    return this.http.post<Questions>(this.url,question);
  }

  public updateQuestion(question:Questions):Observable<Questions>{
    return this.http.put<Questions>(this.url,question);
  }

  public deleteQuestion(id:number):Observable<any>{
    return this.http.delete<Number>(this.url+'/'+id);
  }

  public searchQuestion(id:number):Observable<Questions>{

    return this.http.get<Questions>(this.url+'/'+id);
  }
  public searchResult(question:Questions):void{
    this.question=question;
  }
  public getResult():Questions{
    return this.question;
  }

  public setScore():void{
    this.http.get<number>(this.url+"/answers").subscribe(res=>{
      this.score = res;
    })
  }
  public getScore():number{
    return this.score;
  }

  public setResult(flag:number):void{
    if(flag == 1){
      this.res = true;
    }else{
      this.res = false;
    }
    console.log(this.res);
  }

  public evaluateResult(num:number,str:string):Observable<any>{
    return this.http.put(this.url+'/add/'+num+'/'+str,str);
}
}
