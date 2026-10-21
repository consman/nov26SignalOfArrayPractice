import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Dogs } from './dogs/dogs';

@Component({
  imports: [Dogs],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('nov26SignalOfArrayPractice');
  
}
