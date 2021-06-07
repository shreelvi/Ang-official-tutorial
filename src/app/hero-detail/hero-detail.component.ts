import { Component, OnInit, Input } from '@angular/core';
import { IHero } from '../IHero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() hero?: IHero;
}
