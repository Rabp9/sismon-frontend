import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {Interseccion} from '../models/interseccion';
import {InterseccionesService} from './intersecciones.service';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from '../directives/sortable.directive';

interface SearchResult {
    intersecciones: Interseccion[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: SortColumn;
    sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(intersecciones: Interseccion[], column: SortColumn, direction: string): Interseccion[] {
    if (direction === '' || column === '') {
        return intersecciones;
    } else {
        return [...intersecciones].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}

function matches(interseccion: Interseccion, term: string, pipe: PipeTransform) {
    return interseccion.descripcion.toLowerCase().includes(term.toLowerCase())
        || pipe.transform(interseccion.codigo).includes(term);
}

@Injectable({providedIn: 'root'})
export class TblService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _intersecciones$ = new BehaviorSubject<Interseccion[]>([]);
    private _total$ = new BehaviorSubject<number>(0);

    private _state: State = {
        page: 1,
        pageSize: 4,
        searchTerm: '',
        sortColumn: '',
        sortDirection: ''
    };

    constructor(private pipe: DecimalPipe, private interseccionesService: InterseccionesService) {
        /*
        this._search$.pipe(
            tap(() => this._loading$.next(true)),
            debounceTime(200),
            switchMap(() => this._search()),
            delay(200),
            tap(() => this._loading$.next(false))
        ).subscribe(result => {
            this._intersecciones$.next(result.intersecciones);
            this._total$.next(result.total);
        });
        */
        this.interseccionesService.getAll().pipe(
            tap(() => this._loading$.next(true)),
            debounceTime(200),
            switchMap((res) => this._search(res)),
            delay(200),
            tap(() => this._loading$.next(false))
        ).subscribe(result => {
            this._intersecciones$.next(result.intersecciones);
            this._total$.next(result.total);
        });
        this._search$.next();
    }

    get intersecciones$() { return this._intersecciones$.asObservable(); }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }

    set page(page: number) { this._set({page}); }
    set pageSize(pageSize: number) { this._set({pageSize}); }
    set searchTerm(searchTerm: string) { this._set({searchTerm}); }
    set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
    set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(res): Observable<SearchResult> {
        const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

        // 1. sort
        let intersecciones = sort(res.intersecciones, sortColumn, sortDirection);

        // 2. filter
        intersecciones = intersecciones.filter(interseccion => matches(interseccion, searchTerm, this.pipe));
        const total = intersecciones.length;

        // 3. paginate
        intersecciones = intersecciones.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({intersecciones, total});
    }
}