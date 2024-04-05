import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_noStandalone';
  value = 0;

  appMinLabel: string = 'myAppMinLabel';
  appMaxLabel: string = 'myAppMaxLabel'

  squreHeight = 100;
  squreWidth = 100;

  // ninjaName = 'kakachi';


  // ninjaConsole() {
  //   console.log(this.ninjaName);
  // }

  // changeNinjaName(name: string) {
  //   this.ninjaName = name;
  // }


  calBuffet(value: string) {
    const price = Number(value);
    this.value = (price * 3) / 4
  }

  testNumberChange(value: number) {
    console.log('Test number change from action-bar: ', value);
  }


  doAppMinChange(value: number) {
    console.log('Test minChange event: ', value);
  }

  doAppMaxChange(value: number) {
    console.log('Test maxChange event : ', value);
  }

}
