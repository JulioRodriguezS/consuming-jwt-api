import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { PublicTasksComponent } from './public-tasks/public-tasks.component';
import { PrivateTaskComponent } from './private-task/private-task.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'public-tasks',
    component: PublicTasksComponent,
    pathMatch: 'full'
  },
  {
    path: 'private-tasks',
    component: PrivateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
