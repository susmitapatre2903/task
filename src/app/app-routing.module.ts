import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';

const routes: Routes = [
  { path:'',component:SidenavComponent},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
