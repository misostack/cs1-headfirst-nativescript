import { Injectable } from "@angular/core";
import { ApiService, PingDTO, API_ROUTES } from "@app/base";
import { Observable } from "rxjs";


Injectable()
export class PingService {
  constructor( 
    private apiService: ApiService
  ) {}

  public ping() : Observable<PingDTO>{
    return new Observable(obs => {
      this.apiService.get(API_ROUTES.PING).subscribe(
        data => obs.next(data.body),
        error => obs.error(error),
      )
    })    
  }  
}