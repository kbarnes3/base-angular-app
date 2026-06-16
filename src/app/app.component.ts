import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { filter, map, startWith } from 'rxjs/operators';
import { versionInfo } from './version-info';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        ThemeSwitcherComponent,
    ]
})
export class AppComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);

  title = 'Base Angular App';
  gitVersion: string = versionInfo.hash;

  // True on narrow viewports (tablet/phone) where the inline nav collapses into a hamburger.
  isHandset = toSignal(
    this.breakpointObserver
      .observe('(max-width: 1023.98px)')
      .pipe(map(result => result.matches)),
    { initialValue: false }
  );

  // Reactive current URL — used to drive sidenav [activated] bindings precisely.
  activeUrl = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );
}
