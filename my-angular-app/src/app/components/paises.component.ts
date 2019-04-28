import {Component} from '@angular/core';
import { PaisesService } from '../services/paises.services';

@Component({
    selector: 'paises',
    template: `<h2>Paises:</h2>
                <ol *ngIf="dataPaises">
                    <li *ngFor="let data of dataPaises">({{data.alpha2Code}}) {{data.name}}</li>
                </ol>
                `,
    providers: [PaisesService]
})

export class PaisesComponent{
    public dataPaises;
    constructor(private _paisesService: PaisesService ) {
            this._paisesService.getPosts().subscribe(
                result => {
                    this.dataPaises = result;
                    if (this.dataPaises.length >= 1) {
                        console.log(this.dataPaises);
                    }

                },
                error => {
                    console.log(<any>error);
                }
            );

    }
}