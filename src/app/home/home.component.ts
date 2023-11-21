import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../Model/Produit.model';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listproduit : Produit[]=[];
  topFiveproduit: Produit[] = []; // Nouvelle variable

  totalclient:number=0
  totalproduit:number=0

  constructor(private service:ClientService,private router:Router) { }


  
    
       
  ngOnInit(): void {
    this.service.getProduit().subscribe((produits: Produit[]) => {
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
  getLatestProducts() {
    // Triez les produits par ID de manière décroissante
    this.listproduit.sort((a, b) => b.id - a.id);
  
    this.topFiveproduit = this.listproduit.slice(0, 16);
  }
}
  


