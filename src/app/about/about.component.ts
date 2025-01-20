import {Component, OnInit} from '@angular/core';
//
import {AngularVersionInformationService} from '../shared/angular-version-information.service';
import {MaterialVersionInformationService} from '../shared/material-version-information.service';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-about',
  imports: [
    MatGridList,
    MatGridTile
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(
    private readonly ngVersionService: AngularVersionInformationService,
    private readonly matVersionService: MaterialVersionInformationService
  ) {}

  get angularVersion(): string {
    return this.ngVersionService.version.full;
  }

  get materialVersion(): string {
    return this.matVersionService.version.full;
  }

  ngOnInit(): void {
  }
}

