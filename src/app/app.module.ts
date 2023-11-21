import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitComponent } from './produit/produit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProduitdetailleComponent } from './produitdetaille/produitdetaille.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ProduitComponent,
  
    ProduitdetailleComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    ReactiveFormsModule,
    NgToastModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
