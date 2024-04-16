// Import component decorator
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Metadata for selector, templates and styles
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'
})

// Define the component class
export class AppComponent {
  title = 'Angular Component';
  store = 'Online Shop';
  item = 'Recent Products';
  product = 'Newly Release';
}