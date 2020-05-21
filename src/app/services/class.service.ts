import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }

  getClasses(){
    return this.http.get('/server/api/v1/characters');
  }
  
  getClass(id: number){
    return this.http.get('/server/api/v1/characters/' + id);
  }
}
