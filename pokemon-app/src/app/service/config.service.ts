import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from '../interface/config';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`;
  limit = `https://pokeapi.co/api/v2/pokemon?limit=${Number}`

  constructor(private http: HttpClient) { }

  getConfig(){
    return this.http.get(this.configUrl)
  }

  // getMoreData(){

  // }
}
