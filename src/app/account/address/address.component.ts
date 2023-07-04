import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms';
interface Address {

  fullName:string;
  mobileNumber:string;
  pinCode:string;
  flatOrHouseNo:string;
  landMark:string;
  townCity:string;
  state:string;
  area:string;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address: Address[]=[]; 
  addAddressFormData: any;
  editAddressData!: Address; 
  formEditObject!: FormGroup;
  addressIndex:any;
  submitted = false;
  showAddressSection:boolean=true;
  showAddresSection:boolean=false;
  showEditAddresSection:boolean=false
  
  constructor( private fb: FormBuilder,) {
    
   }
   get addAddressFormDataControl() {
    return this.addAddressFormData.controls;
  }
  ngOnInit(): void {
    this.addAddressFormData = this.fb.group({
      fullName: ['', Validators.required],
      flatOrHouseNo: ['', Validators.required],
      area: ['' ,Validators.required],
      landMark: ['',Validators.required],
      townCity: ['',Validators.required],
      state: ['',Validators.required],
      pinCode: ['',Validators.required],
    },  
    );

    this.formEditObject = new FormGroup({
      fullName:new FormControl(''),
      flatOrHouseNo: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      landMark:new FormControl(''),
      townCity: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      pinCode: new FormControl('', [Validators.required]),

    });
     
    
    this.address=[{'fullName':'Ajay Maurya',
    "mobileNumber":'7309874623',
    "pinCode":'45374',
    "flatOrHouseNo":'512/12',
    "area":'Kopaganj',
    "landMark":'Near Shankar Mandir',
    "townCity":'Mau',
    "state":'Uttar Pradesh',}];
      }
     
  onSubmit()
   {   
      let formData = Object.assign({});
      formData = Object.assign(formData, this.addAddressFormData.value);
      this.address.push(formData);
      this.addAddressFormData = this.fb.group({
        fullName: ['', Validators.required],
        flatOrHouseNo: ['', Validators.required],
        area: ['' ,Validators.required],
        landMark: ['',Validators.required],
        townCity: ['',Validators.required],
        state: ['',Validators.required],
        pinCode: ['',Validators.required],
      },  
      );
      this.showAddresSection=false
      this.showAddressSection=true
  }

  addAddressFormPage()
  {
   this.showAddressSection=false
   this.showAddresSection=true
  }

  editAddress(addreesIndex:any)
  {
    this.addressIndex=addreesIndex
    this.editAddressData =  this.address[addreesIndex]
    this.showAddressSection=false
    this.showAddresSection=false
    this.showEditAddresSection=true

  }
  deletetAddress(indexOfelement:any,addresObject:any)
  {
    this.address = this.address.filter((t) => t.fullName !== addresObject.fullName)
  }
  setDeafultAddress(addreesdata:any)
  {

  }
  UpdateAddresFormData()
  {
    this.address[this.addressIndex].fullName=this.editAddressData.fullName
    this.address[this.addressIndex].flatOrHouseNo=this.editAddressData.flatOrHouseNo
    this.address[this.addressIndex].landMark=this.editAddressData.landMark
    this.address[this.addressIndex].townCity=this.editAddressData.townCity
    this.address[this.addressIndex].pinCode=this.editAddressData.pinCode
    this.address[this.addressIndex].area=this.editAddressData.area
    this.address[this.addressIndex].state=this.editAddressData.state
    alert("Address Update Successfully...")
    
    this.showAddressSection=true
    this.showEditAddresSection=false;
  }
  handlBack()
    {
      this.showAddressSection=true
      this.showAddresSection=false
      this.showEditAddresSection=false
    }
  ClickAccount()
  {
    
  }
  }
  

