import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, FondosIds, Transaccion } from 'src/app/models/Cliente';
import { BtgBackService } from 'src/app/services/btg-back.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private service:BtgBackService,private router:Router){}

  selectedCliente: Cliente | null = null;
  clientes : Cliente[]=[];
  selectedFondos: string[] = [];  
  loading: boolean = true;
  transacciones:Transaccion[]=[];


  ngOnInit(): void {
    this.loading = true;  // Inicia el spinner
    this.service.getClientes().subscribe(
      (response) => {
        this.clientes = response;
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar clientes', error);
        this.loading = false; 
      }
    );
  }
  

  editCliente(id:string){   
    if (!id) {
      console.error('ID no definido');
      return;
    }
    this.router.navigate(['/cliente-edit', id]); 
  }

  openDetalleFondos(cliente: Cliente): void {
    console.log('Abriendo detalles de fondos para el cliente:', cliente);
    this.selectedCliente = cliente;
  }

  // Método para seleccionar o deseleccionar fondos
  toggleFondoSelection(fondoId: string): void {
    const index = this.selectedFondos.indexOf(fondoId);
    if (index > -1) {
      this.selectedFondos.splice(index, 1);  // Si ya está seleccionado, lo eliminamos
    } else {
      this.selectedFondos.push(fondoId);     // Si no está seleccionado, lo agregamos
    }
  }

  quitarFondos(): void {
    if (this.selectedCliente && this.selectedFondos.length > 0) {
      this.loading = true; 
      let fondosIds: FondosIds = { idsFondos: this.selectedFondos };
  
      this.service.quitarFondos(this.selectedCliente.id!, fondosIds).subscribe(
        (response) => {
          console.log('Fondos quitados correctamente', response);
          this.loading = false;
          this.ngOnInit();
        },
        (error) => {
          console.error('Error al quitar fondos', error);
          this.loading = false;
          this.ngOnInit();
        }
      );
    }
  }

  openTransacciones(cliente: any) {
    this.selectedCliente = cliente;
    this.obtenerTransacciones(cliente.id);  // Llamar al método que obtiene las transacciones del cliente
  }

  // Método para obtener las transacciones por ID de cliente
  obtenerTransacciones(idCliente: string) {
    this.loading = true;
    this.service.getTransaccionesById(idCliente).subscribe(
      (data: any) => {
        this.transacciones = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener las transacciones', error);
        this.loading = false;
      }
    );
  }
  

}
