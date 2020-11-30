import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/+store/app.states';
import { ConsentFacade } from 'src/app/+store/consent/consent.facade';
import { AngularMaterialModule } from 'src/app/modules/angular-material.module';

import { GiveConsentComponent } from './give-consent.component';

describe('GiveConsentComponent', () => {
  let component: GiveConsentComponent;
  let fixture: ComponentFixture<GiveConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        StoreModule.forRoot(reducers)
      ],
      providers: [ConsentFacade],
      declarations: [ GiveConsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two input elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.mat-input-element').length).toEqual(2);
  });

  it('should have three checkbox elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('mat-checkbox').length).toEqual(3);
  });

  it('should have submit button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });
});
