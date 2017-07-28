import {Component} from 'angular2/core';
import { ContactListComponnent } from './contacts/contact-list.component';

@Component({
    selector: 'my-app',
    template: `
        <contact-list></contact-list>
        `,
        directives: [ ContactListComponnent]
})

export class AppComponent {

}
