import { Component } from '@angular/core';
import { IEmployee } from './employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeeDetails: IEmployee[];
  tableHeader: string = "Employee Details"
  selectedEmployeeCountRadioButton: string = "all"

  constructor() {
    this.employeeDetails = [
      { "id": "emp1", "name": "Aniket", "surname": "Girhe", "gender": "male", "dob": "05/01/1992", "salary": 60000 },
      { "id": "emp2", "name": "Pallavi", "surname": "Girhe", "gender": "female", "dob": "01/12/1996", "salary": 30000 },
      { "id": "emp3", "name": "Sakshi", "surname": "Bombatkar", "gender": "female", "dob": "10/21/1998", "salary": 10000 },
      { "id": "emp4", "name": "Prasad", "surname": "Bombatkar", "gender": "male", "dob": "11/25/2011", "salary": 100 }
    ]
  }

  getEmployee(): void {
    this.employeeDetails = [
      { "id": "emp1", "name": "Aniket", "surname": "Girhe", "gender": "male", "dob": "05/01/1992", "salary": 60000 },
      { "id": "emp2", "name": "Pallavi", "surname": "Girhe", "gender": "female", "dob": "01/12/1996", "salary": 30000 },
      { "id": "emp3", "name": "Sakshi", "surname": "Bombatkar", "gender": "female", "dob": "10/21/1998", "salary": 10000 },
      { "id": "emp4", "name": "Prasad", "surname": "Bombatkar", "gender": "male", "dob": "11/25/2011", "salary": 100 },
      { "id": "emp5", "name": "Neha", "surname": "Girhe", "gender": "female", "dob": "09/08/1995", "salary": 10000 }
    ]
  }
  

  trackEmployeeById(index: number, employee: any): string {
    return employee.id;
  }

  getMaleEmployee(): number {
    return this.employeeDetails.filter(emp => emp.gender === "male").length
  }

  getFemaleEmployee(): number {
    return this.employeeDetails.filter(emp => emp.gender === "female").length
  }

  onRadioButtonChange(selectedGender: string) {
    this.selectedEmployeeCountRadioButton = selectedGender
  }
}