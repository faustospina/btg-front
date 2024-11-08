import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { BtgBackService } from 'src/app/services/btg-back.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  succes:Boolean=false;
  fail:Boolean=false;

  constructor(private service:BtgBackService,private router:Router) { }

  public cliente:Cliente={
    nombre:"",
    email:"",
    telefono:"",
    preferenciaNotificacion:"",
    saldo:0
  }

  
  ngOnInit() {
    console.log(this.cliente);
  }


  save(form: NgForm) {
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
