import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular Spring Boot integration';
  toggle:boolean = true;
  // isShown:boolean;

  constructor(private router:Router){}

  public home(isShown:boolean):void{
    isShown = true;
    this.router.navigate(['/home']);
  }

  public quiz():void{
    this.router.navigate(['quiz']);
  }
  public attempt():void{
    this.router.navigate(['attempt'])
  }

}
