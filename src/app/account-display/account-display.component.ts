import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../account-data.service';
import { AccountChartComponent } from '../account-chart/account-chart.component';

@Component({
  selector: 'app-account-display',
  templateUrl: './account-display.component.html',
  styleUrls: ['./account-display.component.css']
})
export class AccountDisplayComponent implements OnInit {
  rows:Array<object>;
  grandTotal:object;
  constructor(private accData: AccountDataService) { 
  }

  ngOnInit() {
    this.rows = this.accData.getAccountData();
    this.grandTotal = this.accData.getTotal();
  }

  addAccount(){
    this.accData.addRow();
  }

  refreshPi(){
    this.accData.doRefresh();
  }
}
