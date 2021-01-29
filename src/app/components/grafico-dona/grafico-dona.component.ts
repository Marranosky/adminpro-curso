import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [],
})
export class GraficoDonaComponent implements OnInit {
  @Input() leyenda: string = 'Leyenda';
  @Input('ChartLabels') doughnutChartLabels: Label[] = [];
  @Input('ChartData') doughnutChartData: number[] = [];
  @Input('ChartType') doughnutChartType: string = '';

  constructor() {}

  ngOnInit(): void {
    // this.doughnutChartLabels = ['uno', 'dos', 'tres'];
    // this.doughnutChartData = [10, 20, 30];
    // this.doughnutChartType = 'doughnut';
  }
}
