import { Component, OnInit } from '@angular/core';

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: [string];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent implements OnInit {

  constructor() { }

  locations: Location[] = [
    {
      _id: '590blahblahblah',
      name: 'Costy',
      distance: 14.0,
      address: 'High Street, Reading',
      rating: 3,
      facilities: ['hot drinks', 'food', 'power']
    },
    {
      _id: '590blahblahblah',
      name: 'Starcups',
      distance: 150.0,
      address: 'High Street, Reading',
      rating: 3,
      facilities: ['hot drinks', 'food']
    }
  ];

  ngOnInit() {
  }

}