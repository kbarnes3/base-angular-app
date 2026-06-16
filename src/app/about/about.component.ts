import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
}
