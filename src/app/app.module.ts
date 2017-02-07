import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {DicesComponent} from "./dices/dices.component";
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  { path: '', redirectTo: '/dices', pathMatch:'full' },
  { path: 'dices', component: DicesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
