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

  ngOnInit(): void {
    this.service.getFondos().subscribe((response)=>{
      console.log(response);
      this.fondos=response;
    })
  }

}
