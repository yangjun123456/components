import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
declare const $: any;


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: [],
  animations: []
})
export class VideoComponent implements OnInit, OnDestroy {
  @Input() data: any;
  constructor() { }
  ngOnInit() {
  }
  ngOnDestroy() {

  }

}
