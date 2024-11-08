import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CommonModule } from '@angular/common';
import { BtgBackService } from './services/btg-back.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './pages/clientes/add/add.component';
import { EditComponent } from './pages/clientes/edit/edit.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FondosComponent } from './pages/fondos/fondos.component';
import { AddFondoComponent } from './pages/fondos/add-fondo/add-fondo.component';
import { ClientesFondosComponent } from './pages/clientes-fondos/clientes-fondos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    AddComponent,
    EditComponent,
    FondosComponent,
    AddFondoComponent,
    ClientesFondosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BtgBackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
