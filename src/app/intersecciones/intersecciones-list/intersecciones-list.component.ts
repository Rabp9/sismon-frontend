import { DecimalPipe } from '@angular/common';
import { Component, QueryList, OnInit, ViewChildren} from '@angular/core';
import { Interseccion } from '../../models/interseccion';
// import { InterseccionesService } from '../../services/intersecciones.service';
import { TblService } from '../../services/tbl.service';
import { Observable, of } from 'rxjs';
import { SortableDirective, SortEvent } from '../../directives/sortable.directive';

@Component({
    selector: 'app-intersecciones-list',
    templateUrl: './intersecciones-list.component.html',
    styleUrls: ['./intersecciones-list.component.scss'],
    providers: [TblService, DecimalPipe]
})
export class InterseccionesListComponent implements OnInit {
    intersecciones: Observable<Interseccion[]>;
    total: Observable<number>;
    
    @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

    constructor(public tblService: TblService) {
        this.intersecciones = tblService.intersecciones$;
        this.total = tblService.total$;
    }

    ngOnInit(): void {
        // this.interseccionesService.getAll().subscribe(res => this.intersecciones = of(res.intersecciones));
    }
    
    onSort({column, direction}: SortEvent): void {
        // resetting other headers
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });

        this.tblService.sortColumn = column;
        this.tblService.sortDirection = direction;
    }
}
