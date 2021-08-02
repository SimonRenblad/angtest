import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  dataInComponent: number;
  stateService: StateService;

  constructor(stateService: StateService) { 
    this.stateService = stateService;
    this.dataInComponent = 2
  }

  ngOnInit(): void {
    this.dataInComponent = this.stateService.getDataFromService()
  }

}
