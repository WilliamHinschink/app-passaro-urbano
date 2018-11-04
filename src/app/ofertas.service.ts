import { OfertaModel } from "./shared/oferta.model";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Http } from "@angular/http";

@Injectable()
export class OfertasService extends BaseService {

  constructor(protected http: Http) {
    super(http)
  }

  public getOfertas(): Promise<OfertaModel[]> {
    return this.http.get(`${this.URL_OFERTA_API}?destaque=true`)
      .toPromise()
      .then(res => res.json());
  }

  public getOfertasPorCategoria(categoria: string): Promise<Array<OfertaModel>> {
    return this.http.get(`${this.URL_OFERTA_API}?categoria=${categoria}`)
      .toPromise()
      .then(res => res.json());
  }

  public getOfertaPorId(id: number): Promise<OfertaModel> {
    return this.http.get(`${this.URL_OFERTA_API}?id=${id}`)
      .toPromise()
      .then(res => res.json().shift());
  }

  public getComoUsarPorId(id: number): Promise<string> {
    return this.http.get(`${this.URL_COMO_USAR_API}?id=${id}`)
      .toPromise()
      .then(res => res.json().shift().descricao);
  }

  public getOndeFicaPorId(id: number): Promise<string> {
    return this.http.get(`${this.URL_ONDE_FICA_API}?id=${id}`)
      .toPromise()
      .then(res => res.json()[0].descricao);
  }
}
