import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  count=1;

  setCount(method:string){
    if(method=="plus" && this.count<10){
      this.count=this.count+1
    }else if(method=="minus" && this.count>1){
      this.count=this.count-1
    }
  }
}
