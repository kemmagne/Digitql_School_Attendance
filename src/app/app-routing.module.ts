import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './login/home/home.component';

const routes: Routes = [
  { path: '', component: AppComponent, },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module')
        .then(mod => mod.LoginModule)
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
