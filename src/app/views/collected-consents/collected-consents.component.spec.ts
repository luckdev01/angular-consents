import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/+store/app.states';
import { ConsentFacade } from 'src/app/+store/consent/consent.facade';
import { AngularMaterialModule } from 'src/app/modules/angular-material.module';

import { CollectedConsentsComponent } from './collected-consents.component';

describe('CollectedConsentsComponent', () => {
  let component: CollectedConsentsComponent;
  let fixture: ComponentFixture<CollectedConsentsComponent>;
  let consentFacadeReference;

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
      declarations: [ CollectedConsentsComponent ]
    })
    .compileComponents();

    consentFacadeReference = TestBed.inject(ConsentFacade);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedConsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    consentFacadeReference.loadConsents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-table')).toBeTruthy();
  });

  it('should be page size 2', () => {
    const compiled = fixture.nativeElement;
    expect(component.paginator.pageSizeOptions.length).toEqual(1);
    expect(component.paginator.pageSizeOptions[0]).toEqual(2);
  });
});
