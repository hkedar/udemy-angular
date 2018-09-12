import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreation: string = 'No server was created';
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  disableTag() : boolean{
    return !this.allowNewServer;
  }

  onCreateServer(): void{
    this.serverCreation = 'Server was created';
  }

  onUpdateServerName(event: Event): void{
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
