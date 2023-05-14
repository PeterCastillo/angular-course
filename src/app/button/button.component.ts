import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  currentColor: string = '';
  textInverse: boolean = false
  handleChangeColor = (color: string): void => {
    this.currentColor = this.currentColor === color ? '' : color;
  };
}
