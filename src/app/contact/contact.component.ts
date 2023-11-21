import { Component } from '@angular/core';
import { Contact } from '../Model/Contact.model';
import { ClientService } from '../service/client.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ContactForm:FormGroup
  messagecontact=""
  constructor(private service :ClientService,private router:Router,private fb:FormBuilder,private toast:NgToastService) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      prenom: new FormControl('',[
        Validators.required,]),
     
      email: new FormControl('',[
        Validators.required,
        Validators.email]),
        tel: new FormControl('',[
          Validators.required,]),
      sujet: new FormControl('',[
        Validators.required,]),
      msg: new FormControl('',[
        Validators.required,]),
      }
     this.ContactForm = this.fb.group(formControls)
   }
   get nom() {return this.ContactForm.get('nom');} 
  get prenom() { return this.ContactForm.get('prenom');}
  get email() {return this.ContactForm.get('email');}
  get tel() {return this.ContactForm.get('tel');}
  get sujet() {return this.ContactForm.get('sujet');}
  get msg() {return this.ContactForm.get('msg');}
  addNewContact() {
    let data = this.ContactForm.value;
    console.log(data);
    let contact = new Contact(
     undefined, data.nom,data.prenom,data.email,data.tel,data.sujet,data.msg);
    console.log(contact);
    
    if (
      data.nom == 0 ||
      data.prenom == 0||
      data.email == 0 ||
      data.tel == 0 ||
      data.sujet == 0 ||
      data.msg == 0 
  
    ) {
      this.messagecontact='<div class="alert alert-primary" role="alert" > Remplir votre champs </div> '

    } else {
    this.service.addContact(contact).subscribe(   // yetzed  ladmin lil base de donnée
      res=>{
        console.log(res);
        this.messagecontact = '<div class="alert alert-success" role="alert">Message est Envoyée</div>';

        
        //this.router.navigate(['/listAdmin']);
      },
      err=>{
        console.log(err);
        this.messagecontact = '<div class="alert alert-danger" role="alert">Error adding contact</div>';
      }
    )
  
    }
  }
  
  
    ngOnInit(): void {
    }
  
  
  }
  


