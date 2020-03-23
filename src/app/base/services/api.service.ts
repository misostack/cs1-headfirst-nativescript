import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from '@environments/environment';
import { map, timeout, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
    ) {
      console.log('ApiService')
  }

  ping() : Observable<any>{
    return this.get('/ping')
  }

  get<T>(path: string, params: {} = {}) {
    return this.marshal(
      this.http
      .get(this.buildURL(path), this.buildOptions(params))
    );
  }

  post(path: string, payload: {}, params: {} = {}) {
    return this.marshal(
      this.http
      .post(this.buildURL(path), payload, this.buildOptions(params))
    )
  }

  private marshal(obsRes) {
    return obsRes.pipe(
      timeout(5000),
      tap(
          // Succeeds when there is a response; ignore other events
          event => { console.log('success', event); return event; },
          // Operation failed; error is an HttpErrorResponse
          error => { console.log('error', error); return error; }
      ),
      map(resp => this.marshalResponse(resp))
    );
  }

  private marshalResponse(resp) {

    if (environment.debug){
      console.group('<DEBUG>');
      console.info('<RESP>', resp);
      console.info('<RESP.headers>', resp.headers);
      console.info('<RESP.body>', resp.body);
      console.groupEnd();
    }
    return {
      status: resp.status,
      statusText: resp.statusText,
      body: resp.body,
      url: resp.url,
      ok: resp.ok
    };
  }

  private buildOptions(params: {}) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return Object.assign({}, {
      headers: headers,
      params: params,
    }, { observe: 'response' })
  }

  private buildURL(path: string) {
    if (path.charAt(0) !== '/') {
      path = `/${path}`;
    }
    return `${environment.apiUrl}${path}`;
  }
}
