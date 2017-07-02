import { Injectable } from '@angular/core';

@Injectable()
export class AccountDataService { 
grandTotal={ cash:0, marVal:0};
chartObj:any;
colors:string[] =[];
cashAmt:any = [];

rows = [
        {
            name: 'Brokerage Account 3',
            marketValue: 1999990,
            cash: 1995826,
            legend: 'orange'
        },
        {
            name: 'Account 3',
            marketValue: 1949990,
            cash: 1695856,
            legend: 'orange'
        },
        {
            name: 'Brokerage Account 1',
            marketValue: 1349990,
            cash: 1595866,
            legend: 'red'
        },
        {
            name: 'Brokerage Account 4',
            marketValue: 155990,
            cash: 160826,
            legend: 'red'
        },
        {
            name: 'Brokerage Account 2',
            marketValue: 74560,
            cash: 199056,
            legend: 'salmon'
        },
        {
            name: 'Account 4',
            marketValue: 55006,
            cash: 530096,
            legend: 'salmon'
        },
        {
            name: 'Account 13',
            marketValue: 37340,
            cash: 1000000,
            legend: 'green'
        },
        {
            name: 'Joint Account 1',
            marketValue: 28308,
            cash: 4167,
            legend: 'salmon'
        },
        {
            name: 'Joint Account 2',
            marketValue: 10000,
            cash: 10000,
            legend: 'green'
        }
    ];
  constructor() { }

  getAccountData(){
    return this.rows;
  }
  addRow(){
    this.rows.push({
      name: 'New Account',
      marketValue: Math.random() * 100000,
      cash: Math.random() * 400000,
      legend: 'cyan'
    });
    this.getTotal();  
  }

  doRefresh(){
      this.getCash();
      this.getColors();
  }

  getTotal(){
    for(let i=0; i<this.rows.length;i++){
      this.grandTotal.cash = this.rows[i].cash+this.grandTotal.cash;
      this.grandTotal.marVal = this.rows[i].marketValue+this.grandTotal.marVal;
    }
    return this.grandTotal;
  }

  getCash(){
    let cashMap = new Map();
    for(let row of this.rows){
          let idx = this.colors.indexOf(row.legend);
          this.cashAmt[idx]=row.cash+(this.cashAmt[idx]==undefined?0:this.cashAmt[idx]);
          console.log(this.cashAmt[idx]+" and "+this.colors.indexOf(row.legend)+" arry length "+this.rows.length);
      }
      return this.cashAmt;
  }
  getColors(){
      let colorSet = new Set();

      for(let row of this.rows){
          colorSet.add(row.legend);
      }
      
      this.colors = Array.from(colorSet);
      console.log(this.colors);
      return this.colors;
  }

}
