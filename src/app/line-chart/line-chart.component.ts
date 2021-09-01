import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Chart } from 'chart.js';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent  {
  private chart!:am4charts.XYChart ;

  constructor(private zone:NgZone) { };

  ngAfterViewInit(){
    this.zone.runOutsideAngular(()=>{
      let chart=am4core.create('line-chart',am4charts.XYChart);
      let title=chart.titles.create();
      // title.text='Line Chart';

      // let data=[
      //   {"area":"X","computers":20, "cars": 50, "boats": 10},
      //   {"area":"Y","computers":50, "cars": 150, "boats": 25},
      //   {"area":"Z","computers":120, "cars": 50, "boats": 40},
      //   {"area":"A","computers":18, "cars": 60, "boats": 15},
      //   {"area":"B","computers":60, "cars": 90, "boats": 20}
      // ];

      chart.dataSource.url='https://run.mocky.io/v3/21dd6596-b9f4-4f3d-a378-ec0ed196366a';

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.title.text = "country";
      categoryAxis.dataFields.category = "country";

      let valueAxisY=chart.yAxes.push(new am4charts.ValueAxis());
      valueAxisY.title.text = "Sales";
      valueAxisY.renderer.minWidth=20;

      let seriesNames =["litres"];
      for (let i=0; i<seriesNames.length; i++){
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.categoryX="country";
        series.dataFields.valueY=seriesNames[i];
        series.name = seriesNames[i];

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        // bullet.readerValueText='country';
        bullet.tooltipText = "Country: {categoryX} \n Litres: {valueY} {name}";
      }

      chart.legend=new am4charts.Legend();
      this.chart=chart;
    })


  }

  ngOnDestroy(){
    this.zone.runOutsideAngular(() =>{
      if (this.chart){
        this.chart.dispose();
      }
    })



  }

}
