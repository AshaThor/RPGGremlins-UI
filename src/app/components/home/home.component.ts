import { Component, OnInit } from '@angular/core';
import {CharacterService } from '../../services/character.service'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  classes: string[] = [
    'barbarian',
    'bard',
    'clearic',
    'druid',
    'fighter',
    'monk',
    'paladin',
    'ranger',
    'rogue',
    'sourcerer',
    'warlock',
    'wizard',
    'artificer',
  ]
  races: string[] = [
    'dragonborn',
    'dwarf',
    'elf',
    'gnome',
    'half-elf',
    'halfling',
    'half-orc',
    'human',
    'tiefling',
    'orc_of_exandria',
    'aarakocra',
    'genasi',
    'gpliath',
    'aasimar',
    'bugbear',
    'firblog',
    'goblin',
    'hobgoblin',
    'kneku',
    'kobold',
    'lizardfolk',
    'orc',
    'tabaxi',
    'triron',
    'yuan-ti_pureblood',
    'feral_tiefling',
    'tortle',
    'changeling',
    'kalashtar',
    'orc_of_eberron',
    'shifter',
    'warforged',
    'gith',
    'centaur',
    'loxodon',
    'minotor',
    'simic_hybrid',
    'vedalken',
    'verdan',
    'locathah',
    'grung',
  ]
  characterForm: FormGroup;
  validMessage: string = "";
  
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterForm = new FormGroup({
      player: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      charClass: new FormControl('', Validators.required),
      race: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    })
  }

  submitCharacter(){
    if(this.characterForm.valid){
      this.validMessage = "Your character has been recorded. They're not the messiah, They're a very naughty character, now piss off";
      this.characterService.createCharacter(this.characterForm.value).subscribe(
        data => {
          this.characterForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Look; fill out the god damn form for peet's sake, he's a nice guy, don't abandon him now";
    }
  }

}
