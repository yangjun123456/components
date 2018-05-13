import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import 'jquery.nicescroll';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showComponent = 'appVideoJs';
  ngOnInit() {
    setTimeout(() => {
      this.niceScroll();
    }, 100);
  }

  niceScroll() {
    $('.detail').niceScroll({
      cursorcolor: 'black',
      cursoropacitymax: 1,
      touchbehavior: false,
      cursorwidth: '3px',
      cursorborder: '0',
      cursorborderradius: '5px'
    });
  }

  currentShowComponent(param) {
    this.showComponent = param;
  }
}
