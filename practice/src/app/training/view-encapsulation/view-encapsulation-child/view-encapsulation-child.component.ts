import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-child',
  templateUrl: './view-encapsulation-child.component.html',
  styleUrls: ['./view-encapsulation-child.component.css'],
  encapsulation: ViewEncapsulation.Native,
  // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ViewEncapsulationChildComponent implements OnInit {
  title = 'child app';
  constructor() { }

  ngOnInit() {
  }

}

