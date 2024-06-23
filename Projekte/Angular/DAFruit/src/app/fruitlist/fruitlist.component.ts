import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdate = inject(FruitlistdataService);


  addComment(comment:string, index:number){
    this.fruitlistdate.addCommenttoFruitlist(comment, index);
    
  }

  nameLog(name:string){
    console.log(name);
  }

}
