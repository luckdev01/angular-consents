import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromConsent from './consent.reducer';

export const selectConsentState = createFeatureSelector<fromConsent.State>(
  fromConsent.consentFeatureKey
);

export const getConsentLoading = createSelector(
  selectConsentState,
  (state: fromConsent.State) => state.loading
);

export const getConsents = createSelector(
  selectConsentState,
  (state: fromConsent.State) => state.consents
);

export const getConsentSaving = createSelector(
  selectConsentState,
  (state: fromConsent.State) => state.saving
);
