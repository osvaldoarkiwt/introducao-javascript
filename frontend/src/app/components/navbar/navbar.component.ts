import { Component } from "@angular/core";

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class NavbarComponent{

    titulo = 'barra de navegação';

    imprimeAviso(){
        console.log('funcionou');
    }
}