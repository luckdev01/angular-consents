import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { CONSENT_OPTIONS } from '../../core/constants/consent.constants';

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss'],
})
export class GiveConsentComponent implements OnInit {
  form: FormGroup;
  formValueChanges$: Observable<Form>;
  consentOptions = [];
  isStart = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      givenConsentArray: this.fb.array([], [Validators.required]),
    });

    this.consentOptions = CONSENT_OPTIONS;
  }

  onCheckboxChange(e: any): void {
    const givenConsentArray: FormArray = this.form.get(
      'givenConsentArray'
    ) as FormArray;

    if (e.checked) {
      givenConsentArray.push(new FormControl(e.source.value));
    } else {
      let i = 0;
      givenConsentArray.controls.forEach((item: FormControl) => {
        if (item.value === e.source.value) {
          givenConsentArray.removeAt(i);
          return;
        }
        i++;
      });
    }

    this.isStart = false;
  }

  submit(): void {
    console.log(this.form.value);
  }

  reset(): void {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }
}
