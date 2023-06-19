import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass']
})
export class ManagerComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sideMenu!: MatSidenav;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

}
