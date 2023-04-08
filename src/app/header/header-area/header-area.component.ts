import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.css']
})
export class HeaderAreaComponent implements OnInit {

  openloginPOPUP:boolean=false
  @Output() loginClickEvent = new EventEmitter<string>();
  @Output() passData1 = new EventEmitter<string>();

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  openLoginPopUP()
  {
     this.openloginPOPUP = true;
  }
}
