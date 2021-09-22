import { Component } from "@angular/core";

@Component({
    selector:"employee-details",
    templateUrl:"./employee-details.component.html",
    styleUrls:["./employee-details.component.css"]
})
export class EmployeeDetailsComponent{
    name:string="Aniket";
    lastName:string="Girhe";
    gender:string="Male";
    age:number=25;
}