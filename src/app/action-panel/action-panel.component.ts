import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['../app.component.css', './action-panel.component.css']
})
export class ActionPanelComponent implements OnInit {

  isEnabledCreate: boolean = false;
  serverCreateStatus: string = "There is no server created."
  serverName = ''

  constructor() {
    setTimeout(() => {
      this.isEnabledCreate = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreate() {
    this.serverCreateStatus = "Server is created!"

    if (this.serverName)
      this.serverCreateStatus += " Name: " + (this.serverName);
  }

  onInput(event: Event) {
    this.serverName = event.target.value;
  }

}
