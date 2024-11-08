import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Fondo } from 'src/app/models/Cliente';
import { BtgBackService } from 'src/app/services/btg-back.service';

@Component({
  selector: 'app-add-fondo',
  templateUrl: './add-fondo.component.html',
  styleUrls: ['./add-fondo.component.scss']
})
export class AddFondoComponent implements OnInit{

  succes:Boolean=false;
  fail:Boolean=false;

  constructor(private service:BtgBackService,private router:Router) { }

  public fondo:Fondo={
    nombre:"",
    montoMinimo:0,
    categoria:""
  }

  ngOnInit() {
    console.log(this.fondo);
  }

  save(form: NgForm) {
    this.service.saveFondos(this.fondo).subscribe((temp)=>{
      if (temp) {
        this.succes=true;
        this.router.navigate( ['/fondos'] );  
      }else{
        this.fail=true;
      }
    })
    console.log("forma", form);
    console.log("valor", form.value)
  }
  

}
