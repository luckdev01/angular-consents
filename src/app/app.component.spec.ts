import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './modules/angular-material.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        AngularMaterialModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'consent'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('consent');
  });

  it('should have sidenav and sidenav content', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-sidenav')).toBeTruthy();
    expect(compiled.querySelector('mat-sidenav-content')).toBeTruthy();
  });

  it('should have two nav menus', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('mat-nav-list a').length).toEqual(2);
  });
});
