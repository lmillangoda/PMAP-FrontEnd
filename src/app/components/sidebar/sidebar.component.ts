import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/current', title: 'Current',  icon: 'offline_bolt', class: '' },
    { path: '/voltage', title: 'Voltage',  icon:'settings_input_component', class: '' },
    { path: '/frequency', title: 'Frequency',  icon:'waves', class: '' },
    { path: '/power', title: 'power',  icon:'power_settings_new', class: '' },
    { path: '/faults', title: 'faults',  icon:'error', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
