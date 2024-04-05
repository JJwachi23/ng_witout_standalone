import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-squre-flex',
  templateUrl: './squre-flex.component.html',
  styleUrl: './squre-flex.component.scss'
})
export class SqureFlexComponent implements OnInit {

  @Input() divWidth = 0;
  @Input() divHeight = 0;

  constructor() {

  }

  ngOnInit(): void {

  }
}
