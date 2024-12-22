import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
  ]
})
export class AppComponent {
  title = 'documentations';
  features = [
    {
      title: "Accessible",
      description: "All components follow the accessibility guidelines set out by the Primer Design System to ensure a better user experience."
    }, 
    {
      title: "Customizable",
      description: "Tailor the components' appearance and behavior using Angular's flexible input properties and directives."  
    }, 
    {
      title: "Responsive",
      description: "The library is designed to be responsive and work seamlessly across all device types and screen sizes."
    },
    {
      title: "Themeable",
      description: "Easily switch between light and dark modes, as well as apply custom themes to your components."
    },
    {
      title: "Signal API",
      description: "Leverage Angular's Signal API to create custom events and handle them in your application, for highly reactive, optimized performance.",
    }
  ];
}
