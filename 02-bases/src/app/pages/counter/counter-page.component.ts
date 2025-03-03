import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counter: number = 10;

  counterSignal = signal(10);

  increaseByOne(value: number) {
    this.counter += value;
    //this.counterSignal.set(this.counterSignal()+value);
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
