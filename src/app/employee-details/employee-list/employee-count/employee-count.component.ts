import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  @Input()
  all:number;
  @Input()
  male:number;
  @Input()
  female:number;
  selectRadioButtonValue:string="all"

  //Event initialization
  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();

  
  constructor() { 
    this.all=0;
    this.male=0;
    this.female=0;
  }
  ngOnInit(): void {
  }

  //This method will trigger event when radio button selected
  onRadioButtonSelectionChange(){
    this.countRadioButtonSelectionChanged.emit(this.selectRadioButtonValue)
  }
}
