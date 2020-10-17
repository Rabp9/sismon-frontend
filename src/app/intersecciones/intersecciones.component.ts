import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { InterseccionesDisplayDirective } from '../directives/intersecciones-display.directive';
import { InterseccionesMapComponent } from './intersecciones-map/intersecciones-map.component';
import { InterseccionesListComponent } from './intersecciones-list/intersecciones-list.component';

@Component({
    selector: 'app-intersecciones',
    templateUrl: './intersecciones.component.html',
    styleUrls: ['./intersecciones.component.scss']
})
export class InterseccionesComponent implements OnInit {
    display: string;
    @ViewChild(InterseccionesDisplayDirective, {static: true}) appInterseccionesDisplay: InterseccionesDisplayDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit(): void {
        this.display = "map";
        this.showMap();
    }
    
    showMap() {
        this.display = "map";  
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InterseccionesMapComponent);
        const viewContainerRef = this.appInterseccionesDisplay.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent<InterseccionesMapComponent>(componentFactory);
    }
    
    showList() {
        this.display = "list";  
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InterseccionesListComponent);
        const viewContainerRef = this.appInterseccionesDisplay.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent<InterseccionesListComponent>(componentFactory);
    }
}
