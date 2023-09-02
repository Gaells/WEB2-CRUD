import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManutencaoPecasModule } from './manutencao-pecas/manutencao-pecas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManutencaoPecasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
