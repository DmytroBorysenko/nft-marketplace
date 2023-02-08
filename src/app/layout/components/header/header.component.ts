import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NAV_TABS } from '../const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navTabs = NAV_TABS;
  @ViewChild('mobileMenu') mobileMenu: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  showMenu(): void {
    this.mobileMenu.nativeElement.classList.toggle('flex');
    this.mobileMenu.nativeElement.classList.toggle('hidden');
  }
}
