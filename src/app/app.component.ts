import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'amcharts';
// }
export class AppComponent implements OnInit {

  title = 'amcharts';
  public changeChart: string = "Bar Chart";
  selected = this.router.navigate(["./charts/bar-chart"]);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onChangeAmountClicked() {

    if (this.changeChart == "Line Chart") {
      this.router.navigate(["./line-chart"]);
    }
    else if (this.changeChart == "Pie Chart") {
      this.router.navigate(["./pie-chart"]);
    }
  }
}
