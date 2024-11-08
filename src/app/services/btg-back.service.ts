import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Cliente, Fondo, FondosIds } from '../models/Cliente';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BtgBackService {
  constructor(private http: HttpClient) { }


  private url:string=''

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url}/clientes`)
  }

  getClienteById(id:string):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/cliente/${id}`)
  }

  asignarFondos(idCliente:string,idsFondos:FondosIds):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.url}/cliente/${idCliente}/fondos/agregar`,idsFondos)
  }

  quitarFondos(idCliente:string,idsFondos:FondosIds):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.url}/cliente/${idCliente}/fondos/eliminar`,idsFondos)
  }

  saveClientes(cliente:Cliente):Observable<Cliente[]>{
    return this.http.post<Cliente[]>(`${this.url}/cliente`,cliente)
  }

  getFondos():Observable<Fondo[]>{
    return this.http.get<Fondo[]>(`${this.url}/fondos`)
  }

  saveFondos(fondo:Fondo):Observable<Fondo[]>{
    return this.http.post<Fondo[]>(`${this.url}/fondo`,fondo)
  }

  

}
