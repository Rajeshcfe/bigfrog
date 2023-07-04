import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
accountSection:boolean=true
showaddress:boolean=false
myOrders:boolean=false
loginSeciurity:boolean=false
paymentOptions:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  addressClick()
  {
  this.showaddress=true
  this.accountSection=false
  this.myOrders=false
  }
  handleMyOrdersClick()
  {
  this.accountSection=false
  this.myOrders=true
  }
  handleLoginSecurityClick()
  {
  this.accountSection=false
  this.loginSeciurity=true
  }
  handlepaymentOptionsClick()
  {
    this.accountSection=false
    this.paymentOptions=true
  }
}
