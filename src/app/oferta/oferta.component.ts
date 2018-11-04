import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OfertasService } from "../ofertas.service";
import { OfertaModel } from "../shared/oferta.model";

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: OfertaModel;

  constructor(private route: ActivatedRoute,
              private ofertaService: OfertasService) {
  }

  ngOnInit() {
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(oferta => this.oferta = oferta)
  }

}
