import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IConsent, IConsentDTO } from 'src/app/core/models/consent';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = environment.api.baseUrl;

  constructor(public http: HttpClient) {}

  getConsents(): Observable<IConsent[]> {
    return this.http.get<IConsent[]>(environment.api.baseUrl + '/consents');
  }

  saveConsent(body: IConsentDTO): Observable<IConsent> {
    return this.http.post<IConsent>(
      environment.api.baseUrl + '/consents',
      body
    );
  }
}
