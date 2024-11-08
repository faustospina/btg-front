import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fondo } from 'src/app/models/Cliente';
import { BtgBackService } from 'src/app/services/btg-back.service';

@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.component.html',
  styleUrls: ['./fondos.component.scss']
})
export class FondosComponent implements OnInit {
  constructor(private service:BtgBackService,private router:Router){}

  fondos : Fondo[]=[];

  loading: boolean = true;

  ngOnInit(): void {
    this.service.getFondos().subscribe((response)=>{
      console.log(response);
      this.fondos=response;
      this.loading = false;
    },
    (error) => {
      console.error('Error al cargar clientes', error);
      this.loading = false;
    })
  }

  editFondo(id:string){   
    if (!id) {
      console.error('ID no definido');
      return;
    }
    this.router.navigate(['/fondo-edit', id]); 
  }

}
