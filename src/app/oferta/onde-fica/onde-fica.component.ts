import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../../ofertas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(private route: ActivatedRoute,
              private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOndeFicaPorId(this.route.parent.snapshot.params['id'])
      .then(descricao => this.ondeFica = descricao)
  }

}
