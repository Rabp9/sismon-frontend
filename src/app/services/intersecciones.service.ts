import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class InterseccionesService {

    constructor(private http: HttpClient) {
    }
    
    getAll(): Observable<any[]> {
        return this.http.get<any[]>('/api/intersecciones.json');
    };
    /*
    addInterseccion(interseccion: Object): Observable<Interseccion[]> {
        return this.http.post<Interseccion>('http://cursoangular.test/api/v1/images', interseccion)
            .pipe(catchError(this.errorHandler));
    };
    */
    errorHandler(error: HttpErrorResponse) {
        return throwError('Error del servidor.');
    }
}
