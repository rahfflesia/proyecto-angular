import { Component } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'estadisticas',
  imports: [Cabecera, BaseChartDirective],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.css',
})
export class Estadisticas {
  // Datos dummy
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2022', '2023', '2024'],
    datasets: [
      { data: [65, 59, 80], label: 'Series A' },
      { data: [28, 48, 40], label: 'Series B' },
    ],
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {};

  public pieChartData: ChartConfiguration['data'] = {
    labels: ['Ventas en Tienda', 'Ventas Online', 'Ventas por Correo'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        hoverBorderColor: '#fff',
      },
    ],
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  public lineChartData: ChartConfiguration['data'] = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Ventas 2024',
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Ventas 2025',
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true,
        position: 'left',
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  public radarChartData: ChartConfiguration['data'] = {
    labels: ['HTML y CSS', 'JavaScript', 'TypeScript', 'Angular', 'SQL', 'Git', 'Inglés'],
    datasets: [
      {
        data: [90, 80, 85, 95, 70, 80, 75],
        label: 'Desarrollador A (Senior)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 0.8)',
      },
      {
        data: [70, 75, 60, 50, 60, 70, 80],
        label: 'Desarrollador B (Junior)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 0.8)',
      },
    ],
  };

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  public doughnutChartData: ChartConfiguration['data'] = {
    labels: ['Renta', 'Comida', 'Transporte', 'Entretenimiento', 'Ahorros'],
    datasets: [
      {
        data: [5000, 3500, 1200, 800, 1500],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBorderColor: '#fff',
      },
    ],
  };

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };
}
