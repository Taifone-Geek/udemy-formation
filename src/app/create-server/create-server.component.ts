import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateServerComponent implements OnInit {
  @Input() userName !: string;
  @Output() createServerClicked  = new EventEmitter<string>();
  serverButton = false;
  serverCreated = false;
  
  constructor() { 
    setTimeout(() => {
      this.serverButton = true;
    }, 2000);

    
  }

  ngOnInit(): void {
  }

  resetField() {
    this.userName = 'reset only son value !';
  }

  createServer(value: string) {
    this.serverCreated = true;
    
    this.createServerClicked.emit(value);
  }

  

}
