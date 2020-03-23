import { Injectable } from "@angular/core";

import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const DEBUG = environment.debug || !environment.production;
const SLACK = environment.slack;


Injectable({
  providedIn: 'root'
})
export class LogService {
  
  constructor(
    private http: HttpClient
  ) {
    // initialize
    if(DEBUG) {
      console.log('[DEBUG]', 'LogService init')
    }
  }

  error(error: any) {
    if(DEBUG) {
      console.error('[ERROR]', error.message);
      console.error('[ERROR]', error.stack);
    }
    // SEND ERRORS to slack
    if(SLACK && SLACK.enable) {
      this.sendToSlack(SLACK.url, {
        text: '[ERROR]: ' + error.message ? error.message : error,
        attachments: [
          {
            author_name: SLACK.author_name,
            color: 'danger',
            title: 'Trace',
            text: error.stack ? error.stack : error
          }
        ]
      })
    }
  }

  debug(msgs: any) {
    if( DEBUG ){
      console.dir('[DEBUG]', msgs);            
    }
  }

  sendToSlack(webHook, msg) {
    const options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )
    };    
    this.http.post(webHook, msg, options).subscribe(
      success => {},
      error => console.error('[SLACK DEBUG]', error)
    )    
  }
}