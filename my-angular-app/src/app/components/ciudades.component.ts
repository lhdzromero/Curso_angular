import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'ciudades',
    template: `<h3>Ciudades:</h3>
                <ul *ngIf="!codigoPostal">
                    <li>Berlin</li>
                    <li>Cali</li>
                    <li>Madrid</li>
                    <li>Amsterdam</li>
                    <li>CDMX</li>
                </ul>
                <p *ngIf="codigoPostal">Codigo Postal: {{codigoPostal}}</p>
                <button (click)="redireccion()">Ver Paises</button>
                `
})

export class CiudadesComponent {
    public codigoPostal: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe (
            params => {
                if(params['id'] != null){
                    this.codigoPostal = +params['id'];
                }
            }
        );
    }

    redireccion() {
        this.router.navigate(['/paises']);
    }

}
