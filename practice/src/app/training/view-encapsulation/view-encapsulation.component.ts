import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],
  /**
   * NATIVE:
   * viewEncapsulation Native creates a shadow Dom where it provides its styles to all its children.
   * This shadow dom can use only the styles within the tree and cannot inherit styles from other components from main tree.
   * EMULATED:
   * viewEncapsulation Emulated does not create any shadow Dom.
   * this component's style is applied only to its html page but unlike native viewEncapsulation this components' styles can be
   * inherited from global styles.
   * NONE:
   * no encapsulation and no shadow dom, this can provide its styles to all its children and sibling components.
   * SHADOW DOM:
   * same as viewEncapsulation Native
   */
  /**
   * TRY WORKING OUT BY UNCOMMENTING EACH VIEWENCAPSULATION TYPE IN CHILDREN COMPONENTS WITH DIFFERENT COMBINATIONS.
   */
  // encapsulation: ViewEncapsulation.Native,
  // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ViewEncapsulationComponent implements OnInit {
  title = 'parent component';

  constructor() { }

  ngOnInit() {
  }


}
