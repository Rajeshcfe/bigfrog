import { Component, OnInit } from '@angular/core';
interface Address {

  fullName:string;
  mobileNumber:string;
  pinCode:string;
  flatOrHouseNo:string;
  landMark:string;
  TownCity:string;
  state:string;
  Area:string;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address1: Address[]=[];
  fullName='Ajay Maurya'
  mobileNumber='7309874623'
  pinCode='45374'
  flatOrHouseNo='512/12'
  Area='Kopaganj'
  landMark='Near Shankar Mandir'
 TownCity='Mau'
  state='Uttar Pradesh'
  constructor() {
    
   }

  ngOnInit(): void {
  
     
  }
  
  }
  

