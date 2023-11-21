import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Produit } from '../Model/Produit.model';
import { Contact } from '../Model/Contact.model';
import  jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Achat } from '../Model/Achat';
const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private __clientConnect= new Subject<void>();
  isConnected=false;
  get ClientConnect()
  {
    return this.__clientConnect
  }

  loginUserUrl="http://localhost:8081/api/client/login"

  apiUrl="http://localhost:8081/api"
  apiUrlach="http://localhost:8081/api/client"
  apiUrlachatt="http://localhost:8081/api/achat"
  apiUrlachat = "http://localhost:8081/api/achat/all"

 
  constructor( private http:HttpClient,private router:Router) { }
  getProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiUrl + "/produit");
    }
 
    addContact(contact:Contact){ // envoie une requête HTTP POST vers une URL qui se trouve à l'adresse this.apiUrl+"/admin"
      return this.http.post<any>(this.apiUrl+"/contact", contact,httpOptions);
    }


 
  

  addAchat(achat: Achat) {
    return this.http.post<Achat>(this.apiUrlachatt, achat);
  }
  
  
  
}
