import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/dashboard',
        },
        {
          titulo: 'Progress Bar',
          url: '/progressbar',
        },
        {
          titulo: 'Graficas',
          url: '/graficas1',
        },
        {
          titulo: 'promesas',
          url: '/promesas',
        },
        {
          titulo: 'Exportar a Excel',
          url: '/exportar-excel',
        },
        {
          titulo: 'Case Pack',
          url: '/case-pack',
        },
      ],
    },
  ];

  constructor() {}
}
