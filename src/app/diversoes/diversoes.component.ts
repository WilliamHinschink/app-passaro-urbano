import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service";
import { OfertaModel } from "../shared/oferta.model";

@Component({
  selector: 'app-diversoes',
  templateUrl: './diversoes.component.html',
  styleUrls: ['./diversoes.component.css'],
  providers: [OfertasService]
})
export class DiversoesComponent implements OnInit {

  public ofertas: OfertaModel[];

  constructor(private ofertasService: OfertasService) {
  }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('diversoes')
      .then(oferta => this.ofertas = oferta)
  }

}
