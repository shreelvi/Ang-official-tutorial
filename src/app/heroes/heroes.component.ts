import { Component, OnInit } from '@angular/core';
import { IHero } from '../IHero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes : IHero[] = [];
  selectedHero? : IHero;

  constructor(private heroService: HeroService, private messageService: 
MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: IHero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
