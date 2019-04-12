import {Component} from '@angular/core';

@Component({
    selector: 'paises',
    template: `<h2>Paises:</h2>
                <ul>
                    <li>Alemania</li>
                    <li>Colombia</li>
                    <li>España</li>
                    <li>Holanda</li>
                    <li>México</li>
                </ul>
                <ciudades></ciudades>
                `
})

export class PaisesComponent{ }