import { Component, OnInit, Input } from '@angular/core';
import { Job } from "../job";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() jobs: Job;
  constructor() { }

  ngOnInit(): void {
  }

}
