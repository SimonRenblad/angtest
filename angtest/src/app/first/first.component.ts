import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

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
