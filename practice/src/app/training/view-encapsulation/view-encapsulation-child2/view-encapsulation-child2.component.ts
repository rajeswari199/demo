import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-child2',
  templateUrl: './view-encapsulation-child2.component.html',
  styleUrls: ['./view-encapsulation-child2.component.css'],
  // encapsulation: ViewEncapsulation.Native,
  // encapsulation: ViewEncapsulation.Emulated,
  encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ViewEncapsulationChild2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
