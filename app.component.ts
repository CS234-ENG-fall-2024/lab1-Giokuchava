import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // String variable for interpolation
  message: string;
  // Numeric variable for the counter
  counter: number = 0;
  // Timer IDs for clearing later
  private intervalId: any;
  private timeoutId: any;

  // Constructor to initialize message
  constructor() {
    this.message = 'String interpolation is useful';
  }

  // Lifecycle hook for component initialization
  ngOnInit(): void {
    // Setup a timer to increment counter every 1 second
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);

    // Setup a timer to stop counter increments after 20 seconds
    this.timeoutId = setTimeout(() => {
      clearInterval(this.intervalId);
    }, 20000);
  }

  // Lifecycle hook for cleanup
  ngOnDestroy(): void {
    // Cleanup timers if the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
