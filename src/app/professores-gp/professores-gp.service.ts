import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessoresGpModel } from './professores-gp.model';
import { grandeporte } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGpService {

  constructor( private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<ProfessoresGpModel[]>(`${grandeporte.api_url}/professores`);
  }

  save(profObj: ProfessoresGpModel){
    return this.httpClient.post<ProfessoresGpModel>(`${grandeporte.api_url}/professores`, profObj);
  }

  delete(id: number){
    return this.httpClient.delete(`${grandeporte.api_url}/professores/${id}`);
  }

  getOne(id: number){
    return this.httpClient.get<ProfessoresGpModel>(`${grandeporte.api_url}/professores/${id}`);
  }

  update(id: number, profObj: ProfessoresGpModel){
    return this.httpClient.patch<ProfessoresGpModel>(`${grandeporte.api_url}/professores/${id}`, profObj);
  }
}
