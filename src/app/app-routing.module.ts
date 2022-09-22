import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then(m=>m.MainModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>  import('./modules/admin/admin.module').then((m)=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
