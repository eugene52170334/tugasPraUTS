import { Component, OnInit } from '@angular/core';
import { Submited } from '../submited';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  name: "";
  submited: Array<Submited> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  
  addCounter():void{
      this.submited.push(
        {
        name: this.name,
        time: Date.now()
        }
        );
      this.name = "";
    }
}
