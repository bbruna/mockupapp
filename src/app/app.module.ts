import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FallecidoComponent } from './fallecido/fallecido.component';
import { EdadComponent } from './edad/edad.component';
import { CumpleComponent } from './cumple/cumple.component';
import { NocumpleComponent } from './nocumple/nocumple.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadoComponent } from './resultado/resultado.component';

import { PersonalistComponent } from './personalist/personalist.component';

import { ApiService } from './servicio/api.service';


const routes: Routes =
  [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'fallecido', component: FallecidoComponent },
    { path: 'edad', component: EdadComponent },
    { path: 'cumple', component: CumpleComponent },
    { path: 'nocumple', component: NocumpleComponent },
    { path: 'resultado', component: ResultadoComponent },
    { path: 'personalist', component: PersonalistComponent }

  ];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FallecidoComponent,
    EdadComponent,
    CumpleComponent,
    NocumpleComponent,
    InicioComponent,
    ResultadoComponent,
    PersonalistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
