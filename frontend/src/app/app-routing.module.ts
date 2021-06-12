import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './core/admin-auth.guard';
import { AuthGuard } from './core/auth.guard';

import { LoginComponent } from './modules/auth/page/login/login.component';
import { RegisterComponent } from './modules/auth/page/register/register.component';
import { AdminHomeComponent } from './modules/home/page/admin-home/admin-home.component';
import { HomeComponent } from './modules/home/page/home/home.component';
import { StudentHomeComponent } from './modules/home/page/student-home/student-home.component';
import { NotFoundComponent } from './modules/not-found/page/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin/home',
    component: AdminHomeComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: 'student/home',
    component: StudentHomeComponent,
    canActivate: [AuthGuard],
  },

  // TODO: more paths add above
  { path: '**', redirectTo: 'notFound' },
  { path: 'notFound', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
