import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  constructor(public dataService: DataService) {}
}
