import { Injectable } from '@angular/core';


export class ROUTE {
  public static readonly HOME = '';
  public static readonly PET = 'pet';
  public static readonly PET_DETAIL = 'pet/:id';
  public static readonly PET_EDIT = 'pet/:id/edit';

  public static getPetChildRoute(route: string) {
    return route.replace(`${ROUTE.PET}/`, '');
  }
}

@Injectable()
export class RouteService {

  constructor() { }

  getPetStoreRoute(): any[] {
    return [ROUTE.PET];
  }

  getPetDetailRoute(id: number): any[] {
    return [ROUTE.PET_DETAIL.replace(':id', id.toString())];
  }

  getPetEditRoute(id: number): any[] {
    return [ROUTE.PET_EDIT.replace(':id', id.toString())];
  }
}
