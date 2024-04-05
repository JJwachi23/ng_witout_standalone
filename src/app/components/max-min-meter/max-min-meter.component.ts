import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.scss'
})
export class MaxMinMeterComponent implements OnInit {
  title = 'max-min-meter work!';
  @Input() minLabel = 'minLabel';
  @Input() maxLabel = 'maxLabel';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  doMinChange(value: number) {
    //รับค่า Argument จาก value: number
    //จากนั้นให้ Output minChange ปล่อย Event พร้อมค่า Argument
    this.minChange.emit(value);
  }

  doMaxChange(value: number) {
    this.maxChange.emit(value);
  }


}
