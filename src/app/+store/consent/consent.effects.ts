import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ConsentActions from './consent.actions';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';

@Injectable()
export class ConsentEffects {
  loadConsents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConsentActions.loadConsents),
      concatMap(() =>
        this.apiService.getConsents().pipe(
          map(consents => ConsentActions.loadConsentsSuccess({ consents })),
          catchError(error => {
            this.notifyService.showError(
              'Error occurred loading consent.',
              'Error'
            );

            return of(ConsentActions.loadConsentsFailure({ error }));
          })
        )
      )
    );
  });

  saveConsents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConsentActions.saveConsent),
      concatMap(({ consent }) =>
        this.apiService.saveConsent(consent).pipe(
          map(res => {
            this.notifyService.showSuccess('Saved Successfully.', 'Success');

            return ConsentActions.saveConsentSuccess({ consent: res });
          }),
          catchError(error => {
            this.notifyService.showError(
              'Error occurred saving consent.',
              'Error'
            );

            return of(ConsentActions.saveConsentFailure({ error }));
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private notifyService: NotificationService
  ) {}
}
