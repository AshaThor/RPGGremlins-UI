import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  public classes;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(){
    this.classService.getClasses().subscribe(
      data => {this.classes = data},
      err => console.error(err),
      () => console.log('Classes loaded')
    )
  }
}
