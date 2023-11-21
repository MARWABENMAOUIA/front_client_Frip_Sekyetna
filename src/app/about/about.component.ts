import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  totalclient:number=0
  totalproduit:number=0

  constructor(private service:ClientService,private router:Router) { }

  ngOnInit(): void {
    this.service.getProduit().subscribe(produit => {
  
      this.totalproduit = produit.length
    })
 
    
   
    
       
    }
}
