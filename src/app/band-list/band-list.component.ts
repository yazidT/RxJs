import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
    const o = interval(1000).pipe(
      map(v => v * v),                    // Operator to transform
      filter(v => v %2 == 0)               // Operatpr to filter 
    )

    // for more operators see https://reactivex.io
    

    o.subscribe(
      (value)=>{console.log(value)}
    );
    this.bandDataService.getBands().subscribe(bands => {
      this.bandList = bands;
    });
  }

  ngOnInit(): void {
  }



}
