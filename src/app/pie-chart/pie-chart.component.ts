import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Chart } from 'chart.js';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent  {
  private chart!:am4charts.PieChart;

  constructor(private zone:NgZone) { };

  ngAfterViewInit(){
    this.zone.runOutsideAngular(()=>{
      let chart=am4core.create('pie-chart',am4charts.PieChart);
      let title=chart.titles.create();
      // title.text='Pie Chart';

      // let data=[
      //   {"area":"X","computers":20, "cars": 50, "boats": 10},
      //   {"area":"Y","computers":50, "cars": 150, "boats": 25},
      //   {"area":"Z","computers":120, "cars": 50, "boats": 40},
      //   {"area":"A","computers":18, "cars": 60, "boats": 15},
      //   {"area":"B","computers":60, "cars": 90, "boats": 20}
      // ];
      chart.dataSource.url='https://run.mocky.io/v3/21dd6596-b9f4-4f3d-a378-ec0ed196366a';
      // chart.dataSource.parser = new am4core.JSONParser();

      // chart.data = [ {
      //   "country": "Lithuania",
      //   "litres": 501.9
      // }, {
      //   "country": "Czechia",
      //   "litres": 301.9
      // }, {
      //   "country": "Ireland",
      //   "litres": 201.1
      // }, {
      //   "country": "Germany",
      //   "litres": 165.8
      // }, {
      //   "country": "Australia",
      //   "litres": 139.9
      // }, {
      //   "country": "Austria",
      //   "litres": 128.3
      // }, {
      //   "country": "UK",
      //   "litres": 99
      // }, {
      //   "country": "Belgium",
      //   "litres": 60
      // }, {
      //   "country": "The Netherlands",
      //   "litres": 50
      // } ];

      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      });



}
}

