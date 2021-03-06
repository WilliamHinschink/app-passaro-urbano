import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service";
import { OfertaModel } from "../shared/oferta.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: OfertaModel[];

  constructor(public ofertasService: OfertasService) {
  }

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas()
    this.ofertasService.getOfertas()
      .then(ofertas => {
        this.ofertas = ofertas
      }).catch(error => {
      console.log(error)
    })
  }

}
