import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { versionInfo } from './version-info';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, ThemeSwitcherComponent]
})
export class AppComponent {
  title = 'Base Angular App';
  gitVersion: string = versionInfo.hash;
}
