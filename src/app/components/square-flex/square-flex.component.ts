import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-flex',
  templateUrl: './square-flex.component.html',
  styleUrl: './square-flex.component.scss'
})
export class SquareFlexComponent implements OnInit {
  @Input() divWidth = 0;
  @Input() divHeight = 0;

  constructor() {

  }

  ngOnInit(): void {

  }
}
