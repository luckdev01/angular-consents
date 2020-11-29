import { createReducer, on } from '@ngrx/store';
import { IConsent } from 'src/app/core/models/consent';
import * as ConsentActions from './consent.actions';

export const consentFeatureKey = 'consent';

export interface State {
  loading: boolean;
  saving: boolean;
  consents: IConsent[];
  error: any;
}

export const initialState: State = {
  loading: false,
  saving: false,
  consents: [],
  error: null
};

export const reducer = createReducer(
  initialState,

  on(ConsentActions.loadConsents, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ConsentActions.loadConsentsSuccess, (state, { consents }) => ({
    ...state,
    consents,
    loading: false
  })),
  on(ConsentActions.loadConsentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(ConsentActions.saveConsent, state => ({
    ...state,
    saving: true,
    error: null
  })),
  on(ConsentActions.saveConsentSuccess, (state, { consent }) => ({
    ...state,
    consents: [...state.consents, consent],
    saving: false
  })),
  on(ConsentActions.saveConsentFailure, (state, { error }) => ({
    ...state,
    saving: false,
    error
  }))
);
