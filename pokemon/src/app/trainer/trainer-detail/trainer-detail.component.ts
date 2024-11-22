import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  promedio:number=0;

  constructor() {
  }

  calcularPromedio() {
    this.promedio=0;
    const totalPoder = this.trainerDetail.pokemons.reduce((acc, pokemon) => acc + pokemon.level, 0);
    this.promedio = totalPoder / this.trainerDetail.pokemons.length;
  }
  ngOnInit() {
    this.calcularPromedio()
  }
}
