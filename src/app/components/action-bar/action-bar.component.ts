import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss'
})
export class ActionBarComponent {
  counter: number = 0;
  @Input() step: number = 1;


  decrease() {
    // if (this.counter - 1 >= 0) {
    //   this.counter = this.counter - 1;
    //   console.log(this.counter);
    // }

    if (this.counter > 0) {
      this.counter = this.counter - this.step;
      console.log(this.counter);
    }
  }

  increase() {
    // if (this.counter < 100) {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }

    if (this.counter < 100) {
      this.counter = this.counter + this.step;
      console.log(this.counter);
    }
  }



}
