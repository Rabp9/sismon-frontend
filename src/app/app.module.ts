import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InterseccionesService } from './services/intersecciones.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterseccionesComponent } from './intersecciones/intersecciones.component';
import { NavbarComponent } from './navbar.component';
import { InterseccionesAddComponent } from './intersecciones/intersecciones-add/intersecciones-add.component';
import { InterseccionesEditComponent } from './intersecciones/intersecciones-edit/intersecciones-edit.component';
import { InterseccionesViewComponent } from './intersecciones/intersecciones-view/intersecciones-view.component';
import { InterseccionesMapComponent } from './intersecciones/intersecciones-map/intersecciones-map.component';
import { InterseccionesListComponent } from './intersecciones/intersecciones-list/intersecciones-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterseccionesDisplayDirective } from './directives/intersecciones-display.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortableDirective } from './directives/sortable.directive';

@NgModule({
    declarations: [
        AppComponent,
        InterseccionesComponent,
        NavbarComponent,
        InterseccionesAddComponent,
        InterseccionesEditComponent,
        InterseccionesViewComponent,
        InterseccionesMapComponent,
        InterseccionesListComponent,
        DashboardComponent,
        InterseccionesDisplayDirective,
        SortableDirective
    ],
    imports: [
        routes,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [InterseccionesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
