import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import 'jquery.nicescroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showComponent = '';
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
    console.log(param);
    this.showComponent = param;
  }
}
