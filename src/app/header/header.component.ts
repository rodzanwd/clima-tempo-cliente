import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public URL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit() {
  }

  getLocales(locale: string) {
    return this.http.get('http://localhost:3000/locales')
    .subscribe(result =>  console.log(result));
  }

  getWeather(weather: string) {
    return this.http.get('http://localhost:3000/weather')
    .subscribe(result =>  console.log(result));
  }

}
