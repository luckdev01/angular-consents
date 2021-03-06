import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromConsent from './consent.reducer';
import * as ConsentSelectors from './consent.selectors';
import * as ConsentActions from './consent.actions';
import { IConsentDTO } from '../../core/models/consent';

@Injectable()
export class ConsentFacade {
  loading$ = this.store.pipe(select(ConsentSelectors.getConsentLoading));
  saving$ = this.store.pipe(select(ConsentSelectors.getConsentSaving));
  error$ = this.store.pipe(select(ConsentSelectors.getConsentError));
  allConsent$ = this.store.pipe(select(ConsentSelectors.selectConsentState));
  consents$ = this.store.pipe(select(ConsentSelectors.getConsents));

  constructor(private store: Store<fromConsent.State>) {}

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  loadConsents(): void {
    this.dispatch(ConsentActions.loadConsents());
  }

  saveConsent(consent: IConsentDTO): void {
    this.dispatch(ConsentActions.saveConsent({ consent }));
  }
}
