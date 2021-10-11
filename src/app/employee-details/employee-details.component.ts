import { Component } from "@angular/core";

@Component({
    selector: "employee-details",
    templateUrl: "./employee-details.component.html",
    styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent {
    columnSpan: number = 2;
    tableHeader: string = "Employee Details"
    name: string = "Aniket";
    lastName: string = "Girhe";
    gender: string = "Male";
    age: number = 25;
    myName: string = "";

    classesToApply: string = "boldClass italicClass";
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = true;
    applyColorClass: boolean = true;

    isBold: boolean = true;
    fontSize: number = 30;
    toggleDetails: boolean = false;

    applyClassToButton(): any {
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass,
            colorClass: this.applyColorClass
        }
        return classes
    }

    getStyle(): any {
        let styles = {
            'font-size': '15px',
            'font-weight': 'bold',
            'font-style': 'italic'
        }
        return styles;
    }

    showHideDetails(): void {
        this.toggleDetails = !this.toggleDetails;
    }
}