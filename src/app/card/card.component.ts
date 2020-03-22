import { Component, OnInit, Input } from '@angular/core';
import {Job} from "../job";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() job: Job;
  constructor() { }

  ngOnInit(): void {
  }

}
