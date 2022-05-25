import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TicketdepeseeService {

  baseurl="http://127.0.0.1:8000/"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http : HttpClient) { }

  getAlltickets(): Observable<any>{
    return this.http.get(this.baseurl + 'ticketsdepeses/', { headers: this.httpHeaders });
  }
  getticketById(id : any): Observable<any>{
    return this.http.get(this.baseurl+'ticketsdepeses/'+id+'/',{headers:this.httpHeaders});

  }
  getAllVehicules(): Observable<any> {
    return this.http.get(this.baseurl + 'vehicules/',{headers: this.httpHeaders});
  }
  updateTicket(ticket:any): Observable<any> {
    const body = {id:ticket.id,numeroticket:ticket.numeroticket,caisse:ticket.caisse,vehicule_id:ticket.vehicule_id,date:ticket.date,
      dateP1:ticket.dateP1,dateP2:ticket.dateP2,peseur:ticket.peseur,poidP1:ticket.poidP1,poidP2:ticket.poidP2,observation:ticket.observation};
    return this.http.put(this.baseurl + 'ticketsdepeses/' + ticket.id + '/', body,
    {headers: this.httpHeaders});
  }

}
