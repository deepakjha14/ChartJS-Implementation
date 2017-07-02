import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AccountDisplayComponent } from './account-display/account-display.component';
import { AccountDataService } from './account-data.service';
import { AccountChartComponent } from './account-chart/account-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDisplayComponent,
    AccountChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [AccountDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
