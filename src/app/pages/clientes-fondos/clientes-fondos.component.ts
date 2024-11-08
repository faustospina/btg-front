import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, Fondo, FondosIds } from 'src/app/models/Cliente';
import { BtgBackService } from 'src/app/services/btg-back.service';

@Component({
  selector: 'app-clientes-fondos',
  templateUrl: './clientes-fondos.component.html',
  styleUrls: ['./clientes-fondos.component.scss']
})
export class ClientesFondosComponent implements OnInit {
  clientes: Cliente[] = [];
  fondos: Fondo[] = [];
  selectedCliente: Cliente | null = null;
  selectedFondos: string[] = [];
  loading: boolean = true;

  constructor(private service: BtgBackService,private router:Router) {}
  

  ngOnInit(): void {
    // Cargar clientes y fondos
    this.loadClientes();
    this.loadFondos();
    this.loading= false;
  }

  loadClientes(): void {
    this.service.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  loadFondos(): void {
    this.service.getFondos().subscribe((fondos) => {
      this.fondos = fondos;
    });
  }

  selectCliente(cliente: Cliente): void {
    this.selectedCliente = cliente;
    this.selectedFondos = [];
  }

  toggleFondoSelection(fondoId: string): void {
    const index = this.selectedFondos.indexOf(fondoId);
    if (index > -1) {
      this.selectedFondos.splice(index, 1);
    } else {
      this.selectedFondos.push(fondoId);
    }
  }

  asignarFondos(): void {
    if (this.selectedCliente && this.selectedFondos.length > 0) {
      let fondosIds: FondosIds = { idsFondos: this.selectedFondos };
  
      this.service.asignarFondos(this.selectedCliente.id!, fondosIds).subscribe(
        (response) => {
          console.log('Fondos asignados correctamente', response);
          this.router.navigate( ['/home'] );
          
        },
        (error) => {
          console.error('Error al asignar fondos', error);
        }
      );
    }
  }
  



}
