import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BaseService {

  constructor(protected http: Http) {
  }

  private URL_API: string = "http://localhost:3000";
  protected URL_OFERTA_API: string = `${this.URL_API}/ofertas`;
  protected URL_COMO_USAR_API: string = `${this.URL_API}/como-usar`;
  protected URL_ONDE_FICA_API: string = `${this.URL_API}/onde-fica`;
}
