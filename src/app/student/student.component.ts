import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: any;
  @Input('loveName') name: string;



  constructor() {

    this.student = {

      name: this.name,
    }
   }




  ngOnInit(){

    this.student= this.name;
  }

}
