import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../Model/Produit.model';
import { ClientService } from '../service/client.service';
import { NgToastService } from 'ng-angular-popup';
import { Achat } from '../Model/Achat';

@Component({
  selector: 'app-produitdetaille',
  templateUrl: './produitdetaille.component.html',
  styleUrls: ['./produitdetaille.component.css']
})
export class ProduitdetailleComponent {
  searchTerm: string = '';
  messageachat =""
  totalproduit: number = 0;


  listproduit : Produit[]=[];
  isLoggedIn:boolean
p:number=1
  collection:any[]
  messageCommande=""

  produit : Produit[]

  achatForm: FormGroup;

  // Utilisez FormGroup pour le formulaire


  constructor(
    private service: ClientService,
    private fb: FormBuilder,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) public data: Produit,
    private dialogRef: MatDialogRef<ProduitdetailleComponent>,
  ) {
    this.achatForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      tel: ['', [Validators.required]],
    });
  }

  addNewachat() {
    const formData = this.achatForm.value;
    const achat = new Achat(
      undefined,
     
      formData.nom,
      formData.prenom,
      formData.tel,
      formData.adresse,
      this.data,
    );

    if (
      !formData.nom ||
      !formData.prenom ||
      !formData.tel ||
      !formData.adresse 
    ) {
      this.messageachat = '<div class="alert alert-danger" role="alert">Veuillez remplir tous les champs</div>';

    } else {
      this.service.addAchat(achat).subscribe(
        (res) => {
          console.log(res);
          this.messageachat = '<div class="alert alert-success" role="alert">Votre achat a été enregistré avec succès</div>';

     
          setTimeout(() => {
            this.dialogRef.close();
          }, 4000);
        },
        (err) => {
          console.log(err);
          this.messageachat = '<div class="alert alert-danger" role="alert">Problème de serveur. Veuillez réessayer plus tard</div>';

  
        }
      );
    }
  }

  close() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.service.getProduit().subscribe((produits: Produit[]) => {
      this.listproduit = produits.map((produit) => {
        return {
          ...produit,
          primaryImage: produit.images.length > 0 ? produit.images[0] : null,
        };
      });
      this.totalproduit = produits.length;
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
}
