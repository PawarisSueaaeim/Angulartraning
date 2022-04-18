import { Component, OnInit } from '@angular/core';
import { FormControl,Validator } from '@angular/forms';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  myObject: Array<any> = [];
  reversedObject: Array<any> = [];

  sizeInput = new FormControl();
  timeInput = new FormControl();
  module = new FormControl();
  sumTime = 0;
  timeBar = 0;

  

  onSubmit(){
    if(this.sizeInput.invalid){
      return
    }

    console.log(this.module)
    let met = {
      weight: this.sizeInput.value,
      time: this.timeInput.value
    }
    this.myObject.push(met)
    this.myObject.sort((a, b) => (a.time > b.time) ? 1 : -1)
    this.reversedObject.sort((a, b) => (a.time < b.time) ? 1 : -1)

    let sum: Number = this.myObject.map(a => Number(a.time)).reduce(function(a, b) {
      return a + b
    })

    var cal = Number(sum)/Number(this.module)

    this.sumTime = Number(sum)
    this.timeBar = cal
    console.log(sum)
    console.log(cal)
    console.log(this.myObject)
  }
    
}

