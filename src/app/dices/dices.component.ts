import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: 'dices.component.html',
  styleUrls: ['dices.component.css']
})
export class DicesComponent implements OnInit {


  dices:Dice[] = [];
  result:Result;
  results:Result[] = [];
  constructor() { }

  ngOnInit() {
    this.dices.push(
      new Dice(20),
      new Dice(10),
      new Dice(8),
      new Dice(4),
      new Dice(3),
      new Dice(2)
    )
  }


  public throwDice(dice:Dice){
    this.result = new Result(dice,Math.floor((Math.random() * dice.size) + 1));
    this.results.push(this.result);
  }

}


export class Dice{
  constructor(public size:number){}
}

export class Result{
  public date:number;

  constructor(public dice:Dice, public result:number){
    this.date = Date.now();
  }
}



