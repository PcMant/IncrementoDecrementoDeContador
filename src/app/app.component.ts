import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 0;

  increment(inc: number): void{
    this.contador+=inc;
  }

  multiplicar(inc: number): void{
    this.contador*=inc;
  }

  restar(inc: number): void{
    this.contador-=inc;
  }

}
