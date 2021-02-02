import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plugins } from 'chart.js';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
    this.router.navigate(['/dashboard']);
  }
}
