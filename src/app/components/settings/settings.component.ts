import { Component, OnInit } from '@angular/core';
import { gameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private GS: gameService) { }

  ngOnInit() {
  }
  resetGame() {
    const answer = confirm('Are you sure you would like to reset your progress?');
    if (answer){
      this.GS.resetGame();
    }
  }
}
