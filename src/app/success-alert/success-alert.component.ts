import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['../app.component.css', './success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  isEnabledCreate: boolean = false;
  serverCreateStatus: string = "There is no server created."

  constructor() {
    setTimeout(() => {
      this.isEnabledCreate = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreate() {
    this.serverCreateStatus = "Server created!"
  }
}
