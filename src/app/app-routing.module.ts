import { RouterModule, Routes } from "@angular/router";
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'splash', component: SplashScreenComponent },
  { path: '', redirectTo: '/splash', pathMatch: 'full' }, // Redirect to splash
  { path: 'login', component: LoginComponent },

  // ... other routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
