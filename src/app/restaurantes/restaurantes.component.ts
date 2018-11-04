import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service";
import { OfertaModel } from "../shared/oferta.model";

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: OfertaModel[];

  constructor(private ofertasService: OfertasService) {
  }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurantes')
      .then(oferta => this.ofertas = oferta)
  }

}
