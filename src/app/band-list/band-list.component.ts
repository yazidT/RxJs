import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { filter, map, mergeMap, startWith } from 'rxjs/operators';
import { BandDataService } from '../band-data.service';
import { Band } from '../model';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  refreshDataClickSubject = new Subject();  // subject is an observable that u can inject methods on it

  bandList$: Observable<Band[]> | undefined;

  constructor(private bandDataService: BandDataService) {
    const refreshDataClick$ = this.refreshDataClickSubject.asObservable();

    
    this.bandList$= refreshDataClick$.pipe(
      startWith({}),                                       //methode 1 its the equivalent of the fist click to load the datas
      mergeMap(()=> this.bandDataService.getBands()         // Merge Map is equivalent to merge tow oservables because map returns an $ 
      )
    );
  }

  ngOnInit(): void {
    //this.bandList$ = this.bandDataService.getBands();   //methode 2 Initialize the data with the ngOnInit
    
  }



}
