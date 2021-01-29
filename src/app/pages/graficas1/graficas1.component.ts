import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [],
})
export class Graficas1Component implements OnInit {
  // Doughnut
  // public doughnutChartLabels: Label[] = [
  //   'Download Sales',
  //   'In-Store Sales',
  //   'Mail-Order Sales',
  // ];
  // public doughnutChartData: number[] = [350, 450, 100];
  // public doughnutChartType: ChartType = 'doughnut';

  graficos: any = {
    grafico1: {
      labels: ['Con frijoles', 'Con Natilla', 'Con Tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con',
    },
    grafico2: {
      labels: ['Hombre', 'Mujeres'],
      data: [4500,6000],
      type: 'doughnut',
      leyenda: 'Entrevistados',
    },
    grafico3: {
      labels: ['Con frijoles', 'Con Natilla', 'Con Tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con',
    },
    grafico4: {
      labels: ['Con frijoles', 'Con Natilla', 'Con Tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
