import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuOpen = false;

  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
