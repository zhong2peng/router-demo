import { CanComponentDeactivate } from './can-component-deactivate';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }

}