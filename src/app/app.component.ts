import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text is displayed from parent, one server was created.';

  numberOfServer = 0;

  servers = ["server"];

  

  addServer(newServer: string) {
    if(!this.servers.includes(newServer)){
      this.servers.push(newServer);
    }
    
  }
}
