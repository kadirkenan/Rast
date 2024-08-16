import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LinksService } from '../services/link/links.service';

@Injectable({
  providedIn: 'root'
})
export class LinkResolver implements Resolve<boolean> {
  constructor(private linkService: LinksService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = +route.paramMap.get('id')!;
    return this.linkService.getLinkById(id);
  }

  
}
