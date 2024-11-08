import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fondo } from 'src/app/models/Cliente';
import { BtgBackService } from 'src/app/services/btg-back.service';

@Component({
  selector: 'app-edit-fondo',
  templateUrl: './edit-fondo.component.html',
  styleUrls: ['./edit-fondo.component.scss']
})
export class EditFondoComponent {

  succes:Boolean=false;
  fail:Boolean=false;
  @Input() id: string="";

  public fondo:Fondo={
    nombre:"",
    montoMinimo:0,
    categoria:""
  }

  constructor(private service:BtgBackService,private router:Router, private activateRouter: ActivatedRoute) {
    const id = this.activateRouter.snapshot.paramMap.get('id');
    this.service.getFondoById(id!).subscribe((response)=>{
      this.fondo=response;
    })
   }

 

  ngOnInit() {
    console.log(this.fondo);
  }

  edit(form: NgForm) {
    this.service.saveFondos(this.fondo).subscribe((temp)=>{
      if (temp) {
        this.succes=true;
        this.router.navigate( ['/fondos'] );  
      }else{
        this.fail=true;
      }
    })
  }
}
