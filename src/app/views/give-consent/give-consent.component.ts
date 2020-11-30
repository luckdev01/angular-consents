import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ConsentFacade } from 'src/app/+store/consent/consent.facade';
import { IConsentDTO } from 'src/app/core/models/consent';
import CustomValidators from 'src/app/core/validators/custom-validators';
import { CONSENT_OPTIONS } from '../../core/constants/consent.constants';

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {
  form: FormGroup;
  formValueChanges$: Observable<Form>;
  items = CONSENT_OPTIONS;
  isStart = true;
  saving: boolean;
  error: any;

  constructor(private fb: FormBuilder, private consentFacade: ConsentFacade) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      items: new FormArray([], CustomValidators.multipleCheckboxRequireOne)
    });

    this.items.forEach(e => {
      this.control.push(new FormControl(false));
    });

    this.consentFacade.error$.subscribe(res => {
      this.error = res;
    });
    this.consentFacade.saving$.subscribe(res => {
      this.saving = res;
      if (!this.saving && !this.error) {
        this.resetForm();
      }
    });
  }

  get control(): FormArray {
    return this.form.get('items') as FormArray;
  }

  get givenConsent(): string {
    const givenConsent = this.form.value.items
      .map((checked: boolean, i: number) => (checked ? this.items[i].value : null))
      .filter(v => v !== null);

    return givenConsent.join(',');
  }

  submit(): void {
    const data: IConsentDTO = { ...this.form.value };
    const givenConsent = this.form.value.items
      .map((checked: boolean, i: number) => (checked ? this.items[i].value : null))
      .filter(v => v !== null);

    data.givenConsent = givenConsent.join(',');

    this.consentFacade.saveConsent(data);
  }

  resetForm(): void {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }
}
