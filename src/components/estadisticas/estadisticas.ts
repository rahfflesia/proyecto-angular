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
    datasets: [{ data: [28, 48, 40], backgroundColor: '#0045f5', label: 'Volumen de realización' }],
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {};

  public pieChartData: ChartConfiguration['data'] = {
    labels: ['Ventas en Tienda', 'Ventas Online', 'Ventas por Correo'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#0045f5', '#356effff', '#80a4ffff'],
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
        borderColor: '#0045f5',
        backgroundColor: '#80a4ffff',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Ventas 2025',
        borderColor: '#80a4ffff',
        backgroundColor: '#80a4ffff',
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
    labels: ['Cardiovascular', 'Fuerza', 'Peso Corporal', 'Estiramientos'],
    datasets: [
      {
        data: [70, 75, 60, 50],
        label: 'Categoría de ejercicios más realizados',
        backgroundColor: 'rgba(83, 44, 255, 0.2)',
        borderColor: '#80a4ffff',
        pointBackgroundColor: '#0045f5',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#80a4ffff',
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
        backgroundColor: ['#356effff', '#80a4ffff', '#c8d7ffff', '#80a4ffff', '#cddbffff'],
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
