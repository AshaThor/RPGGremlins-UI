import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  getCharacters(){
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/characters',
      {headers:new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }
  
  getCharacter(id: number){
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/characters/' + id,
    {headers:new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  createCharacter(character){
    let body = JSON.stringify(character);
    return this.http.post('/server/api/v1/characters' , body , httpOptions)
  }
}
