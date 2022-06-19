import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { ServerComponent } from './dashboard/server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
