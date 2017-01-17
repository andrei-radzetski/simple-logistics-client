import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyService } from '../apply.service';
import { Point } from '../../shared/point/point';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Observable } from 'rxjs/Observable';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map'
import { GeoService } from '../../shared/geo/geo.service';
import { Geo } from '../../shared/geo/geo';
import { RestResponseArray } from '../../shared/rest/rest.responseArray';
import { RestResponseError } from '../../shared/rest/rest.responseError'

@Component({
  moduleId: 'app/apply/points/',
  selector: 'sl-apply-',
  templateUrl: './apply.points.component.html'
})
export class ApplyPointsComponent implements OnInit {

  private counter: number = 0;

  private geos: Geo[];

  private name: string;
  private latitude: number;
  private longitude: number;
  private placeId: string;

  private destinationDate: NgbDateStruct;
  private destinationHour: string = '00';
  private destinationMin: string = '00';

  private departureDate: NgbDateStruct;
  private departureHour: string = '00';
  private departureMin: string = '00';

  constructor(private router: Router,
    private applyService: ApplyService,
    private dragulaService: DragulaService,
    private formatter: NgbDateParserFormatter,
    private geoService: GeoService) {
      this.geos = [];
    }

  ngOnInit() {
    this.dragulaService.dropModel
      .flatMap(() => {
        this.counter = 0;
        return Observable.from(this.applyService.points)
      })
      .subscribe((point: Point) => {
        point.order = this.counter++;
      });
  }

  addPoint() {
    let point = new Point();
    point.name = this.name;
    point.order = this.applyService.points.length;
    point.arrivalDatetime = this.parseDate(this.destinationDate, this.destinationHour, this.destinationMin);
    point.departureDatetime = this.parseDate(this.departureDate, this.departureHour, this.departureMin);
    point.latitude = this.latitude;
    point.longitude = this.longitude;
    point.placeId = this.placeId;
    this.applyService.points.push(point);
    this.clear();
  }

  next() {
    this.router.navigate(['/apply/security']);
  }

  remove(index: number) {
    this.applyService.points.splice(index, 1);
    this.counter = 0;
    Observable.from(this.applyService.points).subscribe((point: Point) => {
      point.order = this.counter++;
    });
  }

  location(point: Point) {
    console.log(point);
  }

  rawLocation() {
    console.log(this.name, this.latitude, this.longitude, this.placeId)
  }

  find(name: string) {
    if (name != null && name.trim().length > 2) {
      this.geoService.find(name)
        .subscribe(
        (res: RestResponseArray<Geo>) => this.geos = res.array,
        (err: RestResponseError) => console.log(err));
    }
  }

  selectGeo(geo: Geo) {
    if(geo) {
      this.name = geo.name;
      this.latitude = geo.latitude;
      this.longitude = geo.longitude;
      this.placeId = geo.placeId;
    }
  }

  private fill(point: Point) {
    this.name = point.name;
    this.destinationDate = {
      year: point.arrivalDatetime.getFullYear(),
      month: point.arrivalDatetime.getMonth() + 1,
      day: point.arrivalDatetime.getDate()
    };
    this.destinationHour = point.getArrivalHourStr();
    this.destinationMin = point.getArrivalMinStr();
    this.departureDate = {
      year: point.departureDatetime.getFullYear(),
      month: point.departureDatetime.getMonth() + 1,
      day: point.departureDatetime.getDate()
    };
    this.departureHour = point.getDepartureHourStr();
    this.departureMin = point.getDepartureMinStr();
    this.latitude = point.latitude;
    this.longitude = point.longitude;
    this.placeId = point.placeId;
  }

  private clear() {
    this.name = undefined;
    this.destinationDate = undefined;
    this.destinationHour = '00';
    this.destinationMin = '00';
    this.departureDate = undefined;
    this.departureHour = '00';
    this.departureMin = '00';
    this.latitude = undefined;
    this.longitude = undefined;
    this.placeId = undefined;
    this.geos = [];
  }

  private parseDate(date: NgbDateStruct, hour: string, min: string): Date {
    if (date) {
      let newDate = new Date(this.formatter.format(date));
      newDate.setHours(Number.parseInt(hour), Number.parseInt(min));
      return newDate;
    }
    return null;
  }

}