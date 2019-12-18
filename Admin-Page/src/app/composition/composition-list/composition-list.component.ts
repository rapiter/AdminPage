import { Component, OnInit } from '@angular/core';
import {CompositionService} from '../../services/composition.service';
import {Composition} from '../../models/composition';

@Component({
  selector: 'app-composition-list',
  templateUrl: './composition-list.component.html',
  styleUrls: ['./composition-list.component.css']
})
export class CompositionListComponent implements OnInit {
compositions: Composition[];

  constructor(private compositionService: CompositionService) { }

  ngOnInit() {
    this.getCompositions();
  }

  getCompositions(): void {
    this.compositionService.getCompositions()
      .subscribe(compositions => this.compositions = compositions);
  }
}
