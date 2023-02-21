import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/helper/must-match.validator';
import { PrimeNGConfig } from "primeng/api";
@Component({
  selector: 'app-log-in-section',
  templateUrl: './log-in-section.component.html',
  styleUrls: ['./log-in-section.component.css']
})
export class LogInSectionComponent implements OnInit {
  registerForm:any;
  submitted = false;
  registraionPage =false;
  loginpage =true;
  geeks: boolean=true;
  constructor(private formBuilder: FormBuilder,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.geeks=true;
    this.primengConfig.ripple = true;
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['test', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  
  }
  displayStyle = "none";
  onClosePop()
  {
    this.displayStyle = "none";
    this.loginpage=true
this.registraionPage=false;
  }
  openPopup() {
    this.displayStyle = "block";
  }
  onsubmitData(dataItem:any) {
    alert("Hiiiii")
    debugger;
    this.displayStyle = "block";
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    regesterUser (){
this.loginpage=false
this.registraionPage=true;
    }
}
