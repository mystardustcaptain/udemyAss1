import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['../app.component.css', './action-panel.component.css']
})
export class ActionPanelComponent implements OnInit {

  serverCreateStatus: string = "There is no server created."
  serverName = ''
  isServerCreated = false;
  servers: string[] = []

  constructor() {
  }

  ngOnInit() {
  }

  onCreate() {
    this.isServerCreated = true;
    this.serverCreateStatus = "Server is created!"

    if (this.serverName) {
      this.serverCreateStatus += " Name: " + (this.serverName);
      this.servers.push(this.serverName);
    }
  }

  // onInput(event: Event) {
  //   this.serverName = event.target.value;
  // }

  isEnabledCreate(): boolean {
    return this.serverName != ''
  }

  getBackgroundColor() {
    if (this.serverName === '')
      return 'red';
    else
      return 'green';
  }
}
