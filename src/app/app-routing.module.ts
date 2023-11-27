import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { KansasComponent } from './components/kansas/kansas.component';
import { ColumbiaComponent } from './components/columbia/columbia.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'kansas',
    component: KansasComponent,
  },
  {
    path: 'columbia',
    component: ColumbiaComponent
  },
  {
    path: '**', 
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
