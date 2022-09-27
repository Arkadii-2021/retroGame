import themes from './themes';
import Team from './Team';
import { randIntArray } from './utils';
import { characterGenerator, generateTeam } from './generators';

import {
  Bowman,
} from './characters/bowman';

import {
  Swordsman,
} from './characters/swordsman';

import {
  Magician,
} from './characters/magician';

import {
  Daemon,
} from './characters/daemon';

import {
  Undead,
} from './characters/undead';

import {
  Vampire,
} from './characters/vampire';

import PositionedCharacter from './PositionedCharacter';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }
  
  createTeams(charactersOnTeam, level, quantity, type1, type2, cell, n1, n2) {
	  let team = [];
	  let positions = randIntArray(quantity, type2, cell, n1, n2)[type1];
	  generateTeam(charactersOnTeam, level, quantity).characters.forEach(function(team1, i) {
		  team.push(new PositionedCharacter(team1, positions[i]));
	  });
	  return team;
  }

  init() {
	  this.gamePlay.drawUi(themes.prairie);
	  this.gamePlay.redrawPositions(this.createTeams([Bowman, Swordsman, Magician], 4, 5, 'columnTeam', 'columnTeam', 57, 0, 1).concat(this.createTeams([Daemon, Undead, Vampire], 4, 5, 'columnOpponent', 'columnOpponent', 64, 6, 7)));
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
