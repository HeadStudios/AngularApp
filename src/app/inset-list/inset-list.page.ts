import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inset-list',
  templateUrl: './inset-list.page.html',
  styleUrls: ['./inset-list.page.scss'],
})
export class InsetListPage implements OnInit {

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  constructor() { }

  ngOnInit() {
  }

}
