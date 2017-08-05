import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private storeService: StoreService,
    private route : Router
  ) { }

  login(val) {
    this.storeService.setEmpId(val);
    console.log(val, "set");
    this.route.navigate(['./dashboard']);
  }

  ngOnInit() {
  }

}
