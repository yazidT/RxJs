import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BandDataService } from '../band-data.service';
import { Band } from '../model';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  bandList$: Observable<Band[]> | undefined;

  constructor(private bandDataService: BandDataService) {

    this.bandList$= this.bandDataService.getBands();
  }

  ngOnInit(): void {
  }



}
