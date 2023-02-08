import { Component } from '@angular/core';
import { NAV_TABS, SOCIAL } from '../const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public navTabs = NAV_TABS;
  public socialLink = SOCIAL;
}
