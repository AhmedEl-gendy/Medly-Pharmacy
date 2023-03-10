import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import {MatChipsModule} from '@angular/material/chips';
import { AddToCartService } from './Core/Services/add-to-cart.service';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { EditDialogComponent } from './Shared/edit-dialog/edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddMedicineDialogComponent } from './Shared/add-medicine-dialog/add-medicine-dialog.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    HomeComponent,
    CartComponent,
    DashboardComponent,
    EditDialogComponent,
    AddMedicineDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,



  ],
  providers: [
 AddToCartService,
 MatDialog

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
