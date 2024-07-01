import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {

  constructor(private router: Router) { }


newGame() {
  //start new game
  this.router.navigateByUrl('/game');
}

}