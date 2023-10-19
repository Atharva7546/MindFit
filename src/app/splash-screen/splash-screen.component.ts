import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Simulate a delay or condition for transitioning to the login screen
    setTimeout(() => {
      this.router.navigate(['/login']); // Navigate to the login screen
    }, 3000); // Navigate after 3 seconds (adjust this as needed)
  }
}
