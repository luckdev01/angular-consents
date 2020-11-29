import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ConsentActions from './consent.actions';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable()
export class ConsentEffects {
  loadConsents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConsentActions.loadConsents),
      concatMap(() =>
        this.apiService.getConsents().pipe(
          map(consents => ConsentActions.loadConsentsSuccess({ consents })),
          catchError(error => of(ConsentActions.loadConsentsFailure({ error })))
        )
      )
    );
  });

  saveConsents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConsentActions.saveConsent),
      concatMap(({ consent }) =>
        this.apiService.saveConsent(consent).pipe(
          map(res => ConsentActions.saveConsentSuccess({ consent: res })),
          catchError(error => of(ConsentActions.saveConsentFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
