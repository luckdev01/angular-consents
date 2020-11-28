import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

const Modules = [
  CommonModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule
];

@NgModule({
  imports: Modules,
  exports: Modules,
})
export class AngularMaterialModule {}
