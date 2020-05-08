import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicio/api.service'

@Component({
  selector: 'app-personalist',
  templateUrl: './personalist.component.html',
  styleUrls: ['./personalist.component.css']
})
export class PersonalistComponent implements OnInit {


  getPersona:any;

  constructor(
    public apiService:ApiService

  ) { 
    this.getPersona = [];

  }

  ngOnInit() {    

  }


  getAllPersona(){
    this.apiService.getPersona().subscribe(response => {
      console.log(response);
      this.getPersona = response;

    })
  }

  funcionPrueba(){
    this.getAllPersona(); 
  }

}
