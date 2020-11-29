import * as fromConsents from './consent/consent.reducer';
import { ConsentEffects } from './consent/consent.effects';
import { environment } from '../../environments/environment';

export interface AppState {
  [fromConsents.consentFeatureKey]: fromConsents.State;
}

export const reducers = {
  [fromConsents.consentFeatureKey]: fromConsents.reducer
};

export const effects = [ConsentEffects];

export const metaReducers = !environment.production ? [] : [];
