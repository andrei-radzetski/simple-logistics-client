import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: 'app/home/',
  selector: 'sl-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  private centerLatitude: number = 53.42;
  private centerLongitude: number = 23.43;
  private zoom: number = 2;

  private departure: string;
  private departureDate: NgbDateStruct;
  private destination: string;
  private destinationDate: NgbDateStruct;

  constructor(private router: Router, private formatter: NgbDateParserFormatter) {}

  search() {
    this.router.navigate(['/requests'], this.createSearchParams());
  }

  private createSearchParams(): NavigationExtras {
    return {
      queryParams: { 
        departure: this.departure,
        departureDate: this.formatDate(this.departureDate),
        destination: this.destination,
        destinationDate: this.formatDate(this.destinationDate)
      }
    }
  }

  private formatDate(date: NgbDateStruct) {
    return date ? this.formatter.format(date) : null;
  }

}
