import {Component} from 'angular2/core';
import { ContactComponnent } from './contact.component';

@Component({
selector: "contact-list",
template: `<h1>Practicing good ones</h1>
          <ul>
            <li *ngFor = "#contact of contacts" (click) = "onSelect(contact)"> {{ contact.fname }} {{ contact.lname}} </li>
          </ul>
          <contact [contact] = "selectedContact"></contact>`
          ,
directives: [ContactComponnent]
})

export class ContactListComponnent {
  public contacts = [{
    fname: "Shafiq",
    lname: "Essani",
    phone: "03332052567",
    email: "shafiqshamsessani@gmail.com"
  },
  {
    fname: "Shafiq",
    lname: "Essani",
    phone: "03332052567",
    email: "shafiqshamsessani@gmail.com"
  },
  {
    fname: "Shafiq",
    lname: "Essani",
    phone: "03332052567",
    email: "shafiqshamsessani@gmail.com"
  },
  ];
  public selectedContact = {};

  onSelect(contact){
    this.selectedContact = contact;
  }
}
