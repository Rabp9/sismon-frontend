import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInterseccionesDisplay]'
})
export class InterseccionesDisplayDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
