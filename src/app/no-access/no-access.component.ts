import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-no-access',
  templateUrl: './no-access.component.html',
  styleUrls: ['./no-access.component.css']
})
export class NoAccessComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
