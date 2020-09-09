import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

tripForm = this.forms.group({
  trip:[""],
  distance:[""],
  time:[""],
})

  constructor(
    private forms: FormBuilder,
    private router: Router,
    private api:ApiService,
  ) { }

   /**
   * @description This page captures the following parameters to be used to filter trips:
   * @param {string} keyword
   * @param {number} distance
   * @param {number} time
   */

  ngOnInit(): void {
    if(this.api.searchValues){
      this.tripForm.get('trip').setValue(this.api.searchValues.trip);
      this.tripForm.get('distance').setValue(this.api.searchValues.distance);
      this.tripForm.get('time').setValue(this.api.searchValues.time);
    }
  }

  searchTrips(){
    if(!this.tripForm.value.trip || !this.tripForm.value.distance || !this.tripForm.value.time){
      if(!this.tripForm.value.trip){
        this.tripForm.get('trip').setValue('all');
      }
      if(!this.tripForm.value.distance){
        this.tripForm.get('distance').setValue(1);
      }
      if(!this.tripForm.value.time){
        this.tripForm.get('time').setValue(1);
      }
    }
    if(this.tripForm.value.trip && this.tripForm.value.distance && this.tripForm.value.time){
      this.api.searchValues={
        trip:this.tripForm.value.trip,
        time:this.tripForm.value.time,
        distance:this.tripForm.value.distance
      };
      this.router.navigate([`/trip/search/results/${this.tripForm.value.trip}/${this.tripForm.value.distance}/${this.tripForm.value.time}`])
    }
  }

  increaseFontSize(){
    document.getElementById('trip').style.fontSize="50px"
  }

}
