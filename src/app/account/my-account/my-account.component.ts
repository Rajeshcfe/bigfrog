import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
showaddress:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  addressClick()
  {
this.showaddress=true
  }
}
