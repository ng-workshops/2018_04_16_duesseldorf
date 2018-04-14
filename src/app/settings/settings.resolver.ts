import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Settings } from './settings.model';
import { Observable } from 'rxjs/Observable';
import { SettingsService } from './settings.service';

@Injectable()
export class SettingsResolver implements Resolve<Settings> {
  constructor(
    private settingsService: SettingsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Settings> {
    return this.settingsService.get();
  }
}
