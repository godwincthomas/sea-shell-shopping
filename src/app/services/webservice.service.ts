import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
@Injectable()
export class WebserviceService {
    // [x: string]: Object;
    token: any;
    public data
    constructor(private http: HttpClient, private router: Router) { }
    // this.token=dealerid : 1
    method(url, data, method): Observable<any> {
        if (method === 'post') {
            const httpOptions = {
                headers: new HttpHeaders({

                    'Content-Type': 'application/x-www-form-urlencoded',
                    'withCredentials': 'true',
                }),
            };
            return this.http.post(url, data, httpOptions,)
                .pipe(
                    map((response: Response) => response, {
                        response: data
                    }),
                    catchError((error: any) => {
                        if (error.status === 500) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 400) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 409) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 406) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 403) {
                        }
                    })
                )
        }
        if (method === 'postjson') {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'withCredentials': 'true',
                }),
            };
            return this.http.post(url, data, httpOptions,)
                .pipe(
                    map((response: Response) => response, {
                        response: data
                    }),
                    catchError((error: any) => {
                        if (error.status === 500) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 400) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 409) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 406) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 403) {
                        }
                    })
                )
        }
        if (method === 'imageupload') {
            const HttpUploadOptions = {
                headers: new HttpHeaders(
                    {
                        "Content-Type": "multipart/form-data"
                    }
                )
            }
            return this.http.post(url, data, HttpUploadOptions)
                .pipe(
                    map((response: Response) => response, {
                        response: data
                    }),
                    catchError((error: any) => {
                        if (error.status === 500) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 400) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 409) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 406) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 403) {
                        }
                    })
                )
        }
        if (method === 'get') {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',

                    'withCredentials': 'true',
                }),
            };
            return this.http.get(url, httpOptions,)
                .pipe(
                    map((response: Response) => response, {
                        response: data
                    }),
                    catchError((error: any) => {
                        if (error.status === 500) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 400) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 409) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 406) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 403) {
                        }
                    })
                )
        }
        if (method === 'getjson') {
            // const httpOptions = {
            //     headers: new HttpHeaders({
            //         'Content-Type': 'application/json',
            //         'withCredentials': 'true',
            //     }),
            // };
            // let headers = new Headers({ 'Content-Type': 'application/json' });

            const httpOptions = {
                // body = JSON.stringify({})
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'withCredentials': 'true',
                }),

                body: {}
            };
            return this.http.get(url, httpOptions)
                .pipe(
                    map((response: Response) => response, {
                        response: data
                    }),
                    catchError((error: any) => {
                        if (error.status === 500) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 400) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 409) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 406) {
                            return Observable.throw(new Error(error.status));
                        }
                        else if (error.status === 403) {
                        }
                    })
                )
        }

    }
}
