import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-log-in-component-section',
  templateUrl: './log-in-component-section.component.html',
  styleUrls: ['./log-in-component-section.component.css']
})
export class LogInComponentSectionComponent implements OnInit {
  geeks: boolean=true;
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
     this.primengConfig.ripple = true;
  }

  
  gfg(dataItem:any) {
    alert("dddd")
    this.geeks = true;
  }

}
