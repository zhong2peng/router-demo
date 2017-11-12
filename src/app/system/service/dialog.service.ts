import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DialogService {

    /**
      * Ask user to confirm an action. `message` explains the action and choices.
      * Returns observable resolving to `true`=confirm or `false`=cancel
      */
    confirm(message?: string): Observable<boolean> {
        const confirmation = window.confirm(message || 'Is it OK?');

        return Observable.of(confirmation);
    };

}