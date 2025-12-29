import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { versionInfo } from './version-info';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, RouterLink, RouterLinkActive, NgbCollapseModule, ThemeSwitcherComponent]
})
export class AppComponent {
  title = 'Base Angular App';
  gitVersion: string = versionInfo.hash;
  isMenuCollapsed = true;
}
