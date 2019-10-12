import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// libs
import { UISharedModule } from '@reserb-app/features';
import { UI_COMPONENTS } from './components';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule, MatDialogModule,
  MatExpansionModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule, MatSlideToggleModule, MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';


const MODULES_MATERIAL = [
  MatBadgeModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatExpansionModule,
  MatIconModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatFormFieldModule,
];

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  UISharedModule,
  ...MODULES_MATERIAL
];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UIModule {}
