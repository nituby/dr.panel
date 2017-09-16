import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './chart/header.component';
import { DimensionComponent } from './chart/dimension.component';
import { MeasureComponent } from './chart/measure.component';
import { ChartComponent } from './chart/chart.component';
import { CustomizeComponent } from './customize/customize.component';
import { FilterComponent } from './customize/filter.component';
import { MarkComponent } from './customize/mark.component';
import { GraphComponent } from './graph-info/graph.component';
import { GraphDrawComponent } from './graph-info/graph-draw.component';
import { GraphInputComponent } from './graph-info/graph-input.component';
import { GraphPublishComponent } from './graph-info/graph-publish.component';
import { SelectChartComponent } from './select-chart/select-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DimensionComponent,
    MeasureComponent,
    ChartComponent,
    CustomizeComponent,
    FilterComponent,
    MarkComponent,
    GraphComponent,
    GraphDrawComponent,
    GraphInputComponent,
    GraphPublishComponent,
    SelectChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
