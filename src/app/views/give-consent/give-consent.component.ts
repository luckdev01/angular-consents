import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss'],
})
export class GiveConsentComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    receiveNewsletter: [''],
    showTargetedAds: [''],
    contributeToAnonymous: [''],
  });

  formValueChanges$: Observable<Form>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  update(form: Form): void {}

  submit(): void {}

  reset(): void {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }
}
