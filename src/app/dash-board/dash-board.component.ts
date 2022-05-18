import { Component, NgModule, OnInit } from '@angular/core';
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
  popTest: Array<any> = [];
  pushPopTest: Array<any> = [];
  sizeInput = new FormControl();
  timeInput = new FormControl();
  module = 0;
  sumTime = 0;
  timeBar = 0;
  
  onSubmit(){
    if(this.sizeInput.invalid){
      return
    }

    // console.log(this.module)
    let met = {
      weight: this.sizeInput.value,
      time: this.timeInput.value
    }
    this.myObject.push(met)
    this.reversedObject.push(met)
  }

  calculate(){
    this.myObject.sort((min, max) => (min.time > max.time) ? 1 : -1)
    this.reversedObject.sort((min, max) => (min.time < max.time) ? 1 : -1)

    let sum: Number = this.myObject.map(a => Number(a.time)).reduce(function(a, b) {
      return a + b
    })
    var cal = Number(sum)/Number(this.module)

    this.sumTime = Number(sum)
    this.timeBar = cal
    
    let temp: any = [];
    let sumOfmodule = 0;
    
    for(let i = 0; i < this.module ; i++) {
      for(let j = 0 ; j<this.reversedObject.length ; i++){
        temp = this.myObject.pop();
        console.log("time " + temp.time)
        // if(Number(temp.time)+sumOfmodule<=cal){
        //   this.popTest.push(temp)
        //   sumOfmodule = this.popTest.map(a => Number(a.time)).reduce(function(a,b) {
        //     return a + b
        //   })
        // }else{
        //   this.pushPopTest.push(this.popTest)
        //   this.popTest.splice(0);
        //   sumOfmodule = 0;
        //   this.popTest.push(temp)
        // }
        // console.log("sum of module " + sumOfmodule)
      }
      console.log("this is module"+ this.pushPopTest)
    }
    // console.log(sum)
    // console.log(cal)
    // console.log(this.myObject)
    // console.log(this.reversedObject) 
  }
}

