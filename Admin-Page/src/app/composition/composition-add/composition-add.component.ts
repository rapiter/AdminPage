import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Composition} from '../../models/composition';
import {Router} from '@angular/router';
import {CompositionService} from '../../services/composition.service';

@Component({
  selector: 'app-composition-add',
  templateUrl: './composition-add.component.html',
  styleUrls: ['./composition-add.component.css']
})
export class CompositionAddComponent implements OnInit {
  compositionForm = new FormGroup({
    name: new FormControl(''),
    year: new FormControl(''),
    duration: new FormControl(''),
    comment: new FormControl(''),
    url: new FormControl(''),
    pictureURL: new FormControl('')
  });
  composition: Composition;

  constructor(private compositionService: CompositionService, private router: Router) { }

  ngOnInit() {

  }

  add() {
    const compositionFromFields = this.compositionForm.value;
    const composition = {
      name: compositionFromFields.name,
      year: compositionFromFields.year,
      duration: compositionFromFields.duration,
      comment: compositionFromFields.comment,
      url: compositionFromFields.url,
      pictureURL: compositionFromFields.pictureURL

    };
    this.compositionService.addComposition(composition as unknown as Composition)
      .subscribe(() => {
        this.router.navigateByUrl('/compositions');
      });
  }
}
