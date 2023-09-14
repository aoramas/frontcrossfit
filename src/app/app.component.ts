import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoginComponent: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIfLoginComponent();
      }
    });
  }

  onRouterOutletActivate(component: any): void {
    this.checkIfLoginComponent();
  }

  private checkIfLoginComponent(): void {
    const routeSnapshot = this.activatedRoute.snapshot;
    const componentName = routeSnapshot.firstChild?.component?.name;
    this.isLoginComponent = componentName === 'LoginComponent';
  }
}
