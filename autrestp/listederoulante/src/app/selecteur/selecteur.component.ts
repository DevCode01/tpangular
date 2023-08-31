import { Component } from '@angular/core';

@Component({
  selector: 'app-selecteur',
  templateUrl: './selecteur.component.html',
  styleUrls: ['./selecteur.component.less']
})
export class SelecteurComponent {
  options: string[] = ['PARIS', 'MARSEILLE', 'LYON'];
}
