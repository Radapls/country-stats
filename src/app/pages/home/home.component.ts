import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries } from 'src/core/services/models/country.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public countries$: Observable<Array<Countries>> = this.api.getCountries$;
  public countries: Array<Countries> = [];
  public sub: Subscription = new Subscription();


  constructor(
    private readonly api: CountriesApi
  )
  { }

  ngOnInit(): void {
    this.sub.add(this.countries$.subscribe((value) =>
    this.countries = value))
  }

}
