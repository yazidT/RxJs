import { Component, OnInit } from '@angular/core';
import { BandDataService } from '../band-data.service';
import { Band } from '../model';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  bandList: Band[] | undefined;

  constructor(private bandDataService: BandDataService) {
    this.bandDataService.getBands().subscribe(bands => {
      this.bandList = bands;
    });
  }

  ngOnInit(): void {
  }



}
