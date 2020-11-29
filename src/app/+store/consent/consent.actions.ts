import { createAction, props } from '@ngrx/store';
import { IConsent, IConsentDTO } from 'src/app/core/models/consent';

export const loadConsents = createAction('[Consent] Load Consents');

export const loadConsentsSuccess = createAction(
  '[Consent] Load Consents Success',
  props<{ consents: IConsent[] }>()
);

export const loadConsentsFailure = createAction(
  '[Consent] Load Consents Failure',
  props<{ error: any }>()
);

export const saveConsent = createAction(
  '[Consent] Save Consent',
  props<{ consent: IConsentDTO }>()
);

export const saveConsentSuccess = createAction(
  '[Consent] Save Consent Success',
  props<{ consent: IConsent }>()
);

export const saveConsentFailure = createAction(
  '[Consent] Save Consent Failure',
  props<{ error: any }>()
);
