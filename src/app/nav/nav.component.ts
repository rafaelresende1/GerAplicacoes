import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {

    this.menuItems = [
          { name: 'Home'},
          { name: 'ListaAções'}
        ];
      }

  }

