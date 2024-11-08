import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, FondosIds } from 'src/app/models/Cliente';
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

  ngOnInit(): void {
    this.service.getClientes().subscribe((response)=>{
      console.log(response);
      this.clientes=response;
    })
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
      let fondosIds: FondosIds = { idsFondos: this.selectedFondos };

      this.service.quitarFondos(this.selectedCliente.id!, fondosIds).subscribe(
        (response) => {
          console.log('Fondos quitados correctamente', response);
          this.ngOnInit();
        },
        (error) => {
          console.error('Error al quitar fondos', error);
          this.ngOnInit();
        }
      );
    }
  }

}
