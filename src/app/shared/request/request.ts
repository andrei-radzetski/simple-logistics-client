import { Point } from '../point/point';
import { RestObject } from '../rest/rest.object';
import { RestRequest } from '../rest/rest.request';

export class Request extends RestObject implements RestRequest {
  
  kind: string;
  service: string;
  seatsNumber: number;
  transport: string;
  name: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  displayEmail: boolean;
  displayPhone: boolean;
  points: Point[];
  comment: string;

  fill(object: any): void {
    this.id = object.id;
    this.kind = object.kind;
    this.service = object.service;
    this.seatsNumber = object.seatsNumber;
    this.name = object.name;
    this.width = object.width;
    this.height = object.height;
    this.length = object.length;
    this.weight = object.weight;
    this.displayEmail = object.displayEmail;
    this.points = object.points;
    this.comment = object.comment;
    this.points = [];

    for(let temp of object.points) {
      let point = new Point();
      point.fill(temp);
      this.points.push(point);
    }

    this.points = this.points.sort((a: Point, b: Point) => a.order > b.order ? 1 : 0);
  }

  toRequest(): string {
    return JSON.stringify(this);
  }

  getDirection(): string {
    let dir = '';
    for(let point of this.points) {
      if(point.order === 0) {
        dir += point.name;
      } else {
        dir += ' → ' + point.name;
      }
    }
    return dir;
  }

}