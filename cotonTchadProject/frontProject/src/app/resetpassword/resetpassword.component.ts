import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroupDirective, NgForm} from '@angular/forms'; 
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  model: any = {};

  constructor(private route: ActivatedRoute, private authService: LoginService) { }

  ngOnInit() {
    this.model.token = this.route.snapshot.queryParamMap.get('token');
    this.model.userid = this.route.snapshot.queryParamMap.get('userid');
  }
  changePassword() {
    
    this.authService.changePassword(this.model).subscribe(() => {
      
      console.log("success");
    
    }, error => {
      
      console.log(error);
      
    })
  }

}