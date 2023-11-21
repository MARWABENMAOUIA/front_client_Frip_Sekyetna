import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { Achat } from '../Model/Achat';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn: boolean ;
  fraisLivraison = 8;

  constructor(private service:ClientService,private router:Router) { }


  achats: Achat[];




    ngOnInit(): void {
 
    }
    // DeleteAchat(achat: Achat){
    //   if(confirm("Souhaitez-vous annuler l'achat de ce produit ?")) {
       
    //     this.service.onDeleteAchat(achat.id).subscribe(() => {
    //       this.router.navigate(['/mesachats']).then(() => {
    //         window.location.reload()
    //       })
    //     })}}
  


  // getSousTotal(): number {
  //   let total = 0;
   
  //   for (const achat of this.achats) {
  //     total += achat.produit.prix;
     
  //   }
  //   return total;
  // }
  // getTotalCommande(): number {
  //   return this.getSousTotal() + this.fraisLivraison;
  // }

}