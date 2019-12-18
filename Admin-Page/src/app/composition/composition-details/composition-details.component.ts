import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Composition} from '../../models/composition';
import {AuthenticationService} from '../../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CompositionService} from '../../services/composition.service';
import {Style} from '../../models/style';
import {StyleService} from '../../services/style.service';

@Component({
  selector: 'app-composition-details',
  templateUrl: './composition-details.component.html',
  styleUrls: ['./composition-details.component.css']
})
export class CompositionDetailsComponent implements OnInit {
  compositionForm = new FormGroup({
    name: new FormControl(''),
    year: new FormControl(''),
    style: new FormControl(''),
    duration: new FormControl(''),
    comment: new FormControl(''),
    url: new FormControl(''),
    pictureURL: new FormControl('')
  });
  composition: Composition;
  styles: Style[];

  private id: number;


  constructor(private route: ActivatedRoute,
              private compositionService: CompositionService,
              private router: Router, private authService: AuthenticationService, private styleService: StyleService) {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.compositionService.getComposition(this.id)
      .subscribe(compositionFromRest => {
        this.compositionForm.patchValue({
          name: compositionFromRest.name,
          year: compositionFromRest.year,
          duration: compositionFromRest.duration,
          comment: compositionFromRest.comment,
          url: compositionFromRest.url,
          pictureURL: compositionFromRest.pictureURL
        });
      });
  }

  ngOnInit() {
    this.getComposition();
    this.getStyles();
  }

  getComposition(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.compositionService.getComposition(id)
      .subscribe(comp => this.composition = comp);
  }

  getStyles(): void {
    this.styleService.getStyles()
      .subscribe(styles => this.styles = styles);
  }

  save() {
    const comp = this.compositionForm.value;
    comp.id = this.id;
    this.compositionService.updateComposition(comp)
      .subscribe(() => {
        this.router.navigateByUrl('/compositions');
      });
  }

  delete() {
    this.compositionService.deleteComposition(this.composition).subscribe((
        () => {
          this.router.navigateByUrl('/compositions');
        }),
    );
  }


  isAdmin(): boolean {
    if (this.authService.getAdmin() === 0) {
      return true;
    } else { return false; }
  }
}
