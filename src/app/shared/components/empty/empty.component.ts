import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.sass']
})
export class EmptyComponent implements OnInit {

  @Input() msg: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
