import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Angular 2";
  public showSplash = true;

  ngOnInit(): void {
    // Simulate a 2-second delay before hiding the splash screen
    setTimeout(() => {
      this.showSplash = false;
    }, 2000);
  }
}
