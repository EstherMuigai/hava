import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../api.service';
import { TripsInterface } from "../models/tripsInterface";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  trip:TripsInterface;

  constructor(
    private api:ApiService,
    private route:ActivatedRoute,
  ) { }

   /**
   * @description This page describes the details of a trip when selected
   */

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getTrips().subscribe((res: any) => {
      this.trip = res.trips.filter(el=>{return el.id === id;})[0];
    })
  }
}
