import { Component, OnInit, Input, Output } from '@angular/core';
declare const $: any;


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: [],
  animations: []
})
export class VideoComponent implements OnInit {
  @Input() data: any;
  constructor() {}
  ngOnInit() {}

}
