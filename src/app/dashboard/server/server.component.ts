import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverState = 'offline';

  @Input() serverName ! : string ;

  constructor() { 
    this.serverState = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getColor(){
    return this.serverState === "online" ? "green" : "red";
  }

  

}
