import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from '../interface/config';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor(private http: HttpClient) { }

  getConfig(){
    return this.http.get<Config>(this.configUrl)
  }
}
