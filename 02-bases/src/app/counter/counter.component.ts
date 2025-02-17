
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter:{{counter}}</h3>
  <button (click)="increaaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaaseBy(-1)">-1</button>
  `,
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }

}



/*
import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template:'<h1>Hola Counter</h1>',
})
export class CounterComponent {


}

*/
