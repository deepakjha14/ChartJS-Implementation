import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../account-data.service';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-account-chart',
  templateUrl: './account-chart.component.html',
  styleUrls: ['./account-chart.component.css']
})
export class AccountChartComponent implements OnInit {
  // Pie
  public pieChartLabels:string[] ;
  public pieChartData:number[] ;
  public colorsOverride: Array<Color>;
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private accData:AccountDataService) {}

  ngOnInit() {
    this.colorsOverride = [{ backgroundColor: this.accData.getColors()}];
    this.pieChartData = this.accData.getCash();
    this.pieChartLabels = this.accData.getColors();
  }

}
