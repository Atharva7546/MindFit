import { RouterModule, Routes } from "@angular/router";
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: 'splash', component: SplashScreenComponent },
  { path: '', redirectTo: '/splash', pathMatch: 'full' }, // Redirect to splash
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
