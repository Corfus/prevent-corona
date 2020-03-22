import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-site',
  templateUrl: './end-site.component.html',
  styleUrls: ['./end-site.component.scss']
})
export class EndSiteComponent implements OnInit {

  score: string = "25.2930";
  deaths: string = "4.843";
  infections: string = "33.394";
  healed : string = "10.046";
  stateCapital: string = "1.384.945€";
  research: string = "382.293";
  happiness:string = "71%";
  acceptance: string = "42.6%";
  
  constructor() { }

  ngOnInit(): void {
  }

}
