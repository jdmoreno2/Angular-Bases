import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <br />
    <strong>Counter: {{ counter }} </strong>
    <br />
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
    <br>
  `,
})
export class CounterComponent {
  constructor() {}
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
