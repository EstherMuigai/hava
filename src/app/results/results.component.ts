import { Component, OnInit } from '@angular/core';
import { TripsInterface } from "../models/tripsInterface";
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  trips:TripsInterface[];
  current = 1;

  constructor(
    private api:ApiService,
    private route:ActivatedRoute,
  ) { }


  /**
   * @description This page displays the results of trips that fit a criteria 
   * described by the following params:
   * @param {string} keyword
   * @param {number} distance
   * @param {number} time
   */

  ngOnInit(): void {

    const keyword = this.route.snapshot.paramMap.get('keyword').toLocaleLowerCase();

    const distance = parseInt(this.route.snapshot.paramMap.get('distance'));

    const time = parseInt(this.route.snapshot.paramMap.get('time'));

    this.api.getTrips().subscribe((res: any) => {
      const keyFilter = res.trips.filter(el=>{
        if(keyword==='all'){
          return el;
        }else{
          return el.status.toLocaleLowerCase().includes(keyword) || el.pickup_location.toLocaleLowerCase().includes(keyword) ||
          el.dropoff_location.toLocaleLowerCase().includes(keyword)
        }
      });

      const distanceFilter = keyFilter.filter(el=>{
        return (distance===1) ? el :(distance===2) ? el.distance < 3  : (distance===3) ? el.distance > 3 && el.distance < 8 : (distance===4) ? el.distance>8 && el.distance<15 : el.distance>15 ;
      });

      const timeFilter = distanceFilter.filter(el=>{
        return (time===1) ? el :(time===2) ? el.duration < 5  : (time===3) ? el.duration > 5 && el.duration < 10 : (time===4) ? el.duration>10 && el.duratione<20 : el.duration>20;
      });

      this.trips = timeFilter;
    });
  }

}
