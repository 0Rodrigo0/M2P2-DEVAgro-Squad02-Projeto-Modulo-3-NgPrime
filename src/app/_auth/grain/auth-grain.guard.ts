import { GrainService } from 'src/app/_services/grain/grain.service';

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGrainGuard {
  canActivate(
    route: ActivatedRouteSnapshot,
    service: GrainService
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = route.params['id'];
    return service.isGrainFromCompany(id);
  }
}
