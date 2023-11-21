import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { Produit } from '../Model/Produit.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduitdetailleComponent } from '../produitdetaille/produitdetaille.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  selectedSortOption: string = '1';

  searchTerme: string = '';
  showPopupFlag: boolean = false;
  selectedProduct: any;
  listproduit: Produit[] = [];
  p: number = 1;
  collection: any[];
  messageCommande = '';
  reserverForm: FormGroup;
  totalproduit: number = 0;

  constructor(private dialog: MatDialog, private service: ClientService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.service.getProduit().subscribe((produits: Produit[]) => {
      console.log(produits);
      this.listproduit = produits.map((produit) => ({
        ...produit,
        primaryImage: produit.images.length > 0 ? produit.images[0] : null,
      }));
      this.totalproduit = produits.length;
      this.getLatestProducts();
    });
  }

  setPrimaryImage(image: string, produit: Produit): void {
    const clickedImageIndex = produit.images.indexOf(image);
    const primaryImageIndex = produit.images.indexOf(produit.primaryImage);
  
    // Swap the values
    produit.images[clickedImageIndex] = produit.primaryImage;
    produit.images[primaryImageIndex] = image;
  
    // Set the clicked image as the new primary image
    produit.primaryImage = image;
  }
  
  openProduitDetail(produit: Produit): void {
    this.dialog.open(ProduitdetailleComponent, {
      data: produit,
    });
  }

  searchProduct(): void {
    console.log('Search term:', this.searchTerme);

    // Filter the list of products based on the search term
    this.service.getProduit().subscribe((produits: Produit[]) => {

      this.listproduit = produits
        .filter((produit) => produit.nom.toLowerCase().includes(this.searchTerme.toLowerCase()))
        .map((produit) => ({
          ...produit,
          primaryImage: produit.images.length > 0 ? produit.images[0] : null,
        }));
      this.totalproduit = this.listproduit.length;
    });
  }
  // Ajoutez cette méthode à votre classe
sortProducts(): void {
  switch (this.selectedSortOption) {
    case '1':
      this.listproduit.sort((a, b) => a.prix - b.prix);
      break;
    case '2':
      this.listproduit.sort((a, b) => b.prix - a.prix);
      break;
    case '3':
      this.listproduit.sort((a, b) => a.nom.localeCompare(b.nom));
      break;
    // Ajoutez d'autres cas si nécessaire
    default:
      // Par défaut, ne rien faire
  }
}



getLatestProducts() {
  // Triez les produits par ID de manière décroissante
  this.listproduit.sort((a, b) => b.id - a.id);}
}
