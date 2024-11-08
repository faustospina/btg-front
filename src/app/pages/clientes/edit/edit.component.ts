import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { BtgBackService } from 'src/app/services/btg-back.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  succes:Boolean=false;
  fail:Boolean=false;
  @Input() id: string="";

  public cliente:Cliente={
    nombre:"",
    email:"",
    telefono:"",
    preferenciaNotificacion:"",
    saldo:0
  }


  constructor(private service:BtgBackService,private router: Router, private activateRouter: ActivatedRoute) { 
    const id = this.activateRouter.snapshot.paramMap.get('id');
    this.service.getClienteById(id!).subscribe((temp)=>{
      this.cliente=temp;
    })

  }


  bandera: boolean = false;

  ngOnInit() {
  }

  edit(form: NgForm) {
    this.service.saveClientes(this.cliente).subscribe((temp)=>{
      if (temp) {
        this.succes=true;
        this.router.navigate( ['/home'] );  
      }else{
        this.fail=true;
      }
    })
    console.log("forma", form);
    console.log("valor", form.value)
  }

}
