import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageSectionView:boolean=true;
 
  accountSectionShow:boolean=false;

  dataComingFromHeaderAccountClick(accountflag: any):void {
  
   this.pageSectionView=false;
  this.accountSectionShow=accountflag;
 
}

}
