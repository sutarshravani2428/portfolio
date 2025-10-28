import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }
}
