import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageHeader: string = "Employee Details"
  imgPath:string = "https://www.pragimtech.com/wp-content/uploads/2019/02/pargim-logo-1.png";
}