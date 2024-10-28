import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isSidebarExpanded = false;

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
