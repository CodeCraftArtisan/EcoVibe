import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'ecovibe-donut-chart-section',
  templateUrl: './ecovibe-donut-chart-section.component.html',
  styleUrls: ['./ecovibe-donut-chart-section.component.scss'],
  standalone: true,
})
export class EcovibeDonutChartSectionComponent implements AfterViewInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;

  constructor() {
    Chart.register(...registerables); // Register Chart.js components globally
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // Only run in a browser environment
      const dataPie = {
        labels: [
          'planting trees',
          'cleanliness program',
          'helping people',
          'animal safety',
          'feeding the poor',
        ],
        datasets: [
          {
            data: [400, 350, 100, 100, 50],
            backgroundColor: [
              'rgb(190, 243, 192)',
              'rgb(172, 148, 241)',
              'rgb(255, 240, 202)',
              'rgb(249, 207, 100)',
              'rgb(243, 143, 191)',
            ],
            hoverOffset: 4,
          },
        ],
      };

      const configPie: ChartConfiguration<'pie'> = {
        type: 'pie',
        data: dataPie,
        options: {
          plugins: {
            legend: {
              labels: {
                color: 'white',
                font: {
                  size: 12,
                },
              },
            },
          },
        },
      };

      // Create the chart
      const canvas = this.chartCanvas.nativeElement;
      new Chart(canvas, configPie);
    }
  }
}
