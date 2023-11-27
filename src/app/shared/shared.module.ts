import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule  
  ],
  exports: [
    HomePageComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
