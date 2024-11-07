import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  @Input() buttonText: string = 'Submit'; 
  @Input() buttonClass: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
