import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CrisisService, Crisis } from './crisis.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class CrisisDetailResolverService {
    constructor(private cs: CrisisService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
        let id = route.paramMap.get('id');

        return this.cs.getCrisis(id).take(1).map(crisis => {
            if (crisis) {
                return crisis;
            } else { // id not found
                this.router.navigate(['/crisis-center']);
                return null;
            }
        });
    }
}