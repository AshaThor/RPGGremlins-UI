import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {

  public characterReg;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacterReg(this.route.snapshot.params.id);
  }

  getCharacterReg(id:number){
    this.characterService.getCharacter(id).subscribe(
      data => {
        this.characterReg = data;
      },
      err => console.error(err),
      () => console.log('Characters Loaded')
    )
  }

}
