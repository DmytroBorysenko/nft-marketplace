import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  NAV_TABS = [
    {
      title: 'Marketplace',
      path: '/marketplace',
    },
    {
      title: 'Rankings',
      path: '/rankings',
    },
    {
      title: 'Connect a wallet',
      path: '/connect-wallet',
    },
  ];
  @ViewChild('mobileMenu') mobileMenu: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  showMenu(): void {
    this.mobileMenu.nativeElement.classList.toggle('flex');
    this.mobileMenu.nativeElement.classList.toggle('hidden');
  }
}
