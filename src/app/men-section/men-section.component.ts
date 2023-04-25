import { Component, OnInit } from '@angular/core';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
@Component({
  selector: 'app-men-section',
  templateUrl: './men-section.component.html',
  styleUrls: ['./men-section.component.css']
})
export class MenSectionComponent implements OnInit {
  singleViewProductShowHide:boolean=false;
  imagevalue:string="";

  constructor() { }

  ngOnInit(): void {
    
  }
  showSingleViewProduct(){
    this.singleViewProductShowHide=true;
   
  }
}
