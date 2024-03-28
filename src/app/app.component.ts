import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'angular_noStandalone';
  // ninjaName = 'kakachi';


  // ninjaConsole() {
  //   console.log(this.ninjaName);
  // }

  // changeNinjaName(name: string) {
  //   this.ninjaName = name;
  // }

  value = 0;

  calBuffet(value: string) {
    const price = Number(value);
    this.value = (price * 3) / 4
  }

}
