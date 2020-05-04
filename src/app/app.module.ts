import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { DetailsComponent } from './details/details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
