import {Component, Input} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {CountryState} from '../../../../../gamelogic/framework/CountryState';

@Component({
  selector: 'app-line-chart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})

export class LineChartComponent {

  infectedHist: number[] = [];
  healtyHist: number[] = [];
  lineChartOptions = {
    responsive: true,
    animation: false
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  @Input() set newVal(country: CountryState) {
    this.infectedHist.push(country.numberOfInfected.value);
    this.healtyHist.push(country.totalPopulation.value - country.numberOfInfected.value);
  }

  getLineChartData(): ChartDataSets[] {
    // console.log('called');
    // console.log(this.data);
    return [
      {data: this.infectedHist, label: 'infiziert'},
      {data: this.healtyHist, label: 'gesund'}
    ];
  }

  getLineChartLabels(): Label[] {
    return this.infectedHist.map((_, index) => `${index}`
    );
  }
}
